'use client'

import { useToasts } from '@/stores'
import { Toast } from './toast'

export function ToastContainer() {
    const { toasts } = useToasts()

    if (toasts.length === 0) return null

    return (
        <div className="fixed top-4 right-4 z-50 space-y-2">
            {toasts.map((toast) => (
                <Toast key={toast.id} toast={toast} />
            ))}
        </div>
    )
} 