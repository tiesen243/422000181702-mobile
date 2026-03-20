import type { StaticScreenProps } from '@react-navigation/native'

import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Text } from '@/components/ui/text'
import { useAppSelector } from '@/redux/hooks'
import { EditBookForm } from '@/screens/test/_components/edit-book-form'

type EditBookScreenProps = StaticScreenProps<{
  id: string
}>

export default function EditBookScreen({
  route: {
    params: { id },
  },
}: EditBookScreenProps) {
  const insets = useSafeAreaInsets()

  const book = useAppSelector((state) =>
    state.book.books.find((_book) => _book.id === id)
  )
  if (!book)
    return (
      <View style={{ flex: 1, paddingTop: insets.top, paddingInline: 16 }}>
        <Text>Book not found</Text>
      </View>
    )

  return (
    <View style={{ flex: 1, paddingTop: insets.top, paddingInline: 16 }}>
      <EditBookForm book={book} />
    </View>
  )
}
