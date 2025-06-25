import { create } from 'zustand'

export interface Toast {
    id: string
    message: string
    type: 'success' | 'error' | 'info' | 'warning'
    duration?: number
    action?: {
        label: string
        onClick: () => void
    }
}

interface ToastState {
    toasts: Toast[]

    // Actions
    addToast: (toast: Omit<Toast, 'id'>) => void
    removeToast: (id: string) => void
    clearAllToasts: () => void
}

export const useToasts = create<ToastState>((set, get) => ({
    toasts: [],

    addToast: (toast) => {
        const id = Date.now().toString() + Math.random().toString(36)
        const newToast: Toast = {
            id,
            duration: 5000, // 5 seconds default
            ...toast,
        }

        set((state) => ({
            toasts: [...state.toasts, newToast],
        }))

        // Auto remove toast after duration
        if (newToast.duration && newToast.duration > 0) {
            setTimeout(() => {
                get().removeToast(id)
            }, newToast.duration)
        }
    },

    removeToast: (id) => set((state) => ({
        toasts: state.toasts.filter((toast) => toast.id !== id),
    })),

    clearAllToasts: () => set({ toasts: [] }),
})) 