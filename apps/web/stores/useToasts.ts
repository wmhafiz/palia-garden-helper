import { create } from 'zustand'
import { toast } from 'sonner'

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
    // Actions - keeping the same API but using Sonner internally
    addToast: (toast: Omit<Toast, 'id'>) => void
    removeToast: (id: string) => void
    clearAllToasts: () => void
}

export const useToasts = create<ToastState>((set, get) => ({
    addToast: (toastData) => {
        const { type, message, action, duration } = toastData

        switch (type) {
            case 'success':
                toast.success(message, {
                    duration,
                    action: action ? {
                        label: action.label,
                        onClick: action.onClick,
                    } : undefined,
                })
                break
            case 'error':
                toast.error(message, {
                    duration,
                    action: action ? {
                        label: action.label,
                        onClick: action.onClick,
                    } : undefined,
                })
                break
            case 'warning':
                toast.warning(message, {
                    duration,
                    action: action ? {
                        label: action.label,
                        onClick: action.onClick,
                    } : undefined,
                })
                break
            case 'info':
            default:
                toast.info(message, {
                    duration,
                    action: action ? {
                        label: action.label,
                        onClick: action.onClick,
                    } : undefined,
                })
                break
        }
    },

    removeToast: (id) => {
        toast.dismiss(id)
    },

    clearAllToasts: () => {
        toast.dismiss()
    },
})) 