import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { BookList } from '@/screens/test/_components/book-list'

export default function BooklistScreen() {
  const insets = useSafeAreaInsets()

  return (
    <View style={{ flex: 1, paddingTop: insets.top, paddingInline: 16 }}>
      <BookList limit={9999} />
    </View>
  )
}
