import { useTheme } from '@react-navigation/native'
import { CheckIcon } from 'lucide-react-native'
import { TouchableOpacity, View } from 'react-native'

import { cn } from '@/lib/utils'

export function Checkbox({
  children,
  checked = false,
  className,
  activeOpacity = 0.8,
  ...props
}: React.ComponentProps<typeof TouchableOpacity> & { checked: boolean }) {
  const { colors } = useTheme()

  return (
    <TouchableOpacity
      data-slot='checkbox'
      className={cn('flex-row items-center gap-2', className)}
      activeOpacity={activeOpacity}
      {...props}
    >
      <View className='size-5 items-center justify-center border-2 border-border'>
        {checked && <CheckIcon size={16} color={colors.primary} />}
      </View>

      {children}
    </TouchableOpacity>
  )
}
