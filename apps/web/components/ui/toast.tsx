'use client'

import { useEffect } from 'react'
import { useToasts } from '@/stores'

interface ToastProps {
    toast: {
        id: string
        type: 'success' | 'error' | 'info' | 'warning'
        message: string
    }
}

export function Toast({ toast }: ToastProps) {
    const { removeToast } = useToasts()

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(toast.id)
        }, 5000) // Auto-dismiss after 5 seconds

        return () => clearTimeout(timer)
    }, [toast.id, removeToast])

    const getToastStyles = () => {
        switch (toast.type) {
            case 'success':
                return 'bg-green-50 border-green-200 text-green-800'
            case 'error':
                return 'bg-red-50 border-red-200 text-red-800'
            case 'warning':
                return 'bg-yellow-50 border-yellow-200 text-yellow-800'
            case 'info':
            default:
                return 'bg-blue-50 border-blue-200 text-blue-800'
        }
    }

    const getIcon = () => {
        switch (toast.type) {
            case 'success':
                return '✅'
            case 'error':
                return '❌'
            case 'warning':
                return '⚠️'
            case 'info':
            default:
                return 'ℹ️'
        }
    }

    return (
        <div className={`
      p-4 rounded-lg border shadow-lg min-w-80 max-w-md
      transform transition-all duration-300 ease-in-out
      ${getToastStyles()}
    `}>
            <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                    <span className="text-lg">{getIcon()}</span>
                    <div className="flex-1">
                        <p className="text-sm font-medium">{toast.message}</p>
                    </div>
                </div>
                <button
                    onClick={() => removeToast(toast.id)}
                    className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    ✕
                </button>
            </div>
        </div>
    )
} 