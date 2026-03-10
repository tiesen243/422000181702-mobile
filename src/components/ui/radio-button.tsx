import type { ColorValue } from 'react-native'

import { CircleIcon } from 'lucide-react-native'
import { TouchableOpacity, View } from 'react-native'
import { useCSSVariable } from 'uniwind'

import { cn } from '@/lib/utils'

export function RadioButton({
  children,
  checked = false,
  className,
  activeOpacity = 0.8,
  ...props
}: React.ComponentProps<typeof TouchableOpacity> & { checked: boolean }) {
  const primaryColor = useCSSVariable('--primary') as ColorValue

  return (
    <TouchableOpacity
      data-slot='radio-button'
      className={cn('flex-row items-center gap-2', className)}
      activeOpacity={activeOpacity}
      {...props}
    >
      <View className='size-5 items-center justify-center rounded-full border-2 border-border'>
        <CircleIcon size={16} fill={checked ? primaryColor : 'transparent'} />
      </View>

      {children}
    </TouchableOpacity>
  )
}
