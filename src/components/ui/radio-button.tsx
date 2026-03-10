import { TouchableOpacity, View } from 'react-native'

import { cn } from '@/lib/utils'

export function RadioButton({
  children,
  checked = false,
  className,
  ...props
}: React.ComponentProps<typeof TouchableOpacity> & { checked: boolean }) {
  return (
    <TouchableOpacity
      data-slot='radio-button'
      className={cn('flex-row items-center gap-2', className)}
      {...props}
    >
      <View className='size-5 items-center justify-center rounded-full border-2 border-border'>
        <View
          className={cn(
            'size-3 rounded-full',
            checked ? 'bg-primary' : 'bg-transparent'
          )}
        />
      </View>

      {children}
    </TouchableOpacity>
  )
}
