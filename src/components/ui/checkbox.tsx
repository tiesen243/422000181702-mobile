import { useTheme } from '@react-navigation/native'
import { SquareIcon, SquareCheckIcon } from 'lucide-react-native'
import { TouchableOpacity } from 'react-native'

import { cn } from '@/lib/utils'

export function Checkbox({
  children,
  checked = false,
  className,
  ...props
}: React.ComponentProps<typeof TouchableOpacity> & { checked: boolean }) {
  const { colors } = useTheme()

  return (
    <TouchableOpacity
      data-slot='checkbox'
      className={cn('flex-row items-center gap-2', className)}
      {...props}
    >
      {checked ? (
        <SquareCheckIcon size={20} color={colors.primary} />
      ) : (
        <SquareIcon size={20} color={colors.border} />
      )}

      {children}
    </TouchableOpacity>
  )
}
