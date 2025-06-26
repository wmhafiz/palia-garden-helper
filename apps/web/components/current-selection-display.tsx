'use client'

import { useSelectedItem } from '@/stores'

interface CurrentSelectionDisplayProps {
    variant?: 'default' | 'compact' | 'inline'
    showLabel?: boolean
    className?: string
}

export function CurrentSelectionDisplay({
    variant = 'default',
    showLabel = true,
    className = ''
}: CurrentSelectionDisplayProps) {
    const { selectedItem, selectedItemType, isEraseMode } = useSelectedItem()

    const getDisplayInfo = () => {
        if (isEraseMode) {
            return {
                type: 'Tool',
                name: 'Erase Mode',
                icon: '🗑️',
                description: 'Clear crops and fertilizers',
                color: 'text-red-600'
            }
        }

        if (selectedItem && selectedItemType) {
            const capitalizedType = selectedItemType.charAt(0).toUpperCase() + selectedItemType.slice(1)

            return {
                type: capitalizedType,
                name: selectedItem.type,
                icon: selectedItem.image ? (
                    <img
                        src={selectedItem.image}
                        alt={selectedItem.type}
                        className="w-4 h-4 object-contain"
                    />
                ) : '📦',
                description: selectedItemType === 'crop'
                    ? `Growth: ${(selectedItem as any).produceInfo?.growthTime || 'N/A'}d`
                    : selectedItemType === 'fertiliser'
                        ? `Effect: ${(selectedItem as any).effect || 'N/A'}`
                        : 'Selected item',
                color: 'text-palia-blue'
            }
        }

        return {
            type: 'None',
            name: 'No selection',
            icon: '✋',
            description: 'Click an item to select',
            color: 'text-gray-500'
        }
    }

    const displayInfo = getDisplayInfo()

    if (variant === 'compact') {
        return (
            <div className={`flex items-center space-x-2 ${className}`}>
                <div className="w-5 h-5 flex items-center justify-center">
                    {typeof displayInfo.icon === 'string' ? (
                        <span className="text-xs">{displayInfo.icon}</span>
                    ) : (
                        displayInfo.icon
                    )}
                </div>
                <span className={`text-sm font-medium ${className.includes('text-white') ? 'text-white' : displayInfo.color
                    }`}>
                    {displayInfo.name}
                </span>
            </div>
        )
    }

    if (variant === 'inline') {
        return (
            <span className={`text-sm ${displayInfo.color} ${className}`}>
                {displayInfo.name}
            </span>
        )
    }

    // Default variant
    return (
        <div className={`flex items-center space-x-3 ${className}`}>
            {showLabel && (
                <span className="text-sm font-medium text-gray-700">Current selection:</span>
            )}
            <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center">
                    {typeof displayInfo.icon === 'string' ? (
                        <span className="text-sm">{displayInfo.icon}</span>
                    ) : (
                        displayInfo.icon
                    )}
                </div>
                <div className="flex flex-col">
                    <span className={`text-sm font-medium ${displayInfo.color}`}>
                        {displayInfo.name}
                    </span>
                    <span className="text-xs text-gray-500">
                        {displayInfo.description}
                    </span>
                </div>
            </div>
        </div>
    )
} 