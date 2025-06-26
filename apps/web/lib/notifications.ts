// Notification utilities for harvest reminders

export interface NotificationOptions {
    title: string
    body: string
    icon?: string
    tag?: string
}

export class NotificationManager {
    private static instance: NotificationManager
    private hasPermission = false
    private audioContext: AudioContext | null = null
    private notificationSound: AudioBuffer | null = null

    private constructor() {
        // Only initialize on client side
        if (typeof window !== 'undefined') {
            this.checkPermission()
            this.initializeAudio()
        }
    }

    public static getInstance(): NotificationManager {
        if (!NotificationManager.instance) {
            NotificationManager.instance = new NotificationManager()
        }
        return NotificationManager.instance
    }

    private checkPermission() {
        if (typeof window !== 'undefined' && 'Notification' in window) {
            this.hasPermission = Notification.permission === 'granted'
        }
    }

    public async requestPermission(): Promise<boolean> {
        if (typeof window === 'undefined' || !('Notification' in window)) {
            console.warn('This browser does not support notifications')
            return false
        }

        if (Notification.permission === 'granted') {
            this.hasPermission = true
            return true
        }

        if (Notification.permission !== 'denied') {
            const permission = await Notification.requestPermission()
            this.hasPermission = permission === 'granted'
            return this.hasPermission
        }

        return false
    }

    public async showNotification(options: NotificationOptions): Promise<void> {
        if (!this.hasPermission) {
            const granted = await this.requestPermission()
            if (!granted) {
                console.warn('Notification permission denied')
                return
            }
        }

        try {
            if (typeof window === 'undefined') return

            const notification = new Notification(options.title, {
                body: options.body,
                icon: options.icon || '/favicon.ico',
                tag: options.tag || 'palia-harvest-reminder',
                requireInteraction: false,
                silent: false
            })

            // Auto-close after 5 seconds
            setTimeout(() => {
                notification.close()
            }, 5000)

        } catch (error) {
            console.error('Failed to show notification:', error)
        }
    }

    private async initializeAudio() {
        try {
            // Initialize AudioContext on first user interaction
            if (typeof window !== 'undefined') {
                this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()

                // Create a simple beep sound
                this.createNotificationSound()
            }
        } catch (error) {
            console.warn('Failed to initialize audio context:', error)
        }
    }

    private createNotificationSound() {
        if (!this.audioContext) return

        try {
            // Create a simple notification beep (two-tone)
            const sampleRate = this.audioContext.sampleRate
            const duration = 0.3 // 300ms
            const frameCount = sampleRate * duration
            const arrayBuffer = this.audioContext.createBuffer(1, frameCount, sampleRate)
            const channelData = arrayBuffer.getChannelData(0)

            // Generate a pleasant two-tone beep
            for (let i = 0; i < frameCount; i++) {
                const t = i / sampleRate
                const freq1 = 800 // First tone
                const freq2 = 600 // Second tone

                let sample = 0
                if (t < 0.15) {
                    sample = Math.sin(2 * Math.PI * freq1 * t) * 0.3
                } else {
                    sample = Math.sin(2 * Math.PI * freq2 * t) * 0.3
                }

                // Apply fade out
                const fadeOut = Math.max(0, 1 - (t / duration))
                channelData[i] = sample * fadeOut
            }

            this.notificationSound = arrayBuffer
        } catch (error) {
            console.warn('Failed to create notification sound:', error)
        }
    }

    public async playNotificationSound(): Promise<void> {
        if (!this.audioContext || !this.notificationSound) {
            console.warn('Audio context or notification sound not available')
            return
        }

        try {
            // Resume audio context if suspended (required by browser policies)
            if (this.audioContext.state === 'suspended') {
                await this.audioContext.resume()
            }

            const source = this.audioContext.createBufferSource()
            const gainNode = this.audioContext.createGain()

            source.buffer = this.notificationSound
            source.connect(gainNode)
            gainNode.connect(this.audioContext.destination)

            // Set volume (0.0 to 1.0)
            gainNode.gain.value = 0.3

            source.start()
        } catch (error) {
            console.error('Failed to play notification sound:', error)
        }
    }

    public async showHarvestReminder(minutesUntilHarvest: number): Promise<void> {
        const options: NotificationOptions = {
            title: 'Palia Garden Reminder',
            body: `Harvest time in ${minutesUntilHarvest} minute${minutesUntilHarvest !== 1 ? 's' : ''}! 🌱`,
            icon: '/favicon.ico',
            tag: 'harvest-reminder'
        }

        await this.showNotification(options)
    }

    public async showHarvestTime(): Promise<void> {
        const options: NotificationOptions = {
            title: 'Palia Garden Alert',
            body: 'It\'s harvest time! Check your garden now! 🌾',
            icon: '/favicon.ico',
            tag: 'harvest-time'
        }

        await this.showNotification(options)
    }
}

// Export singleton instance - only create on client side
export const notificationManager = typeof window !== 'undefined' ? NotificationManager.getInstance() : null 