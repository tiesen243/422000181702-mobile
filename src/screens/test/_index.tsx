import { useNavigation } from '@react-navigation/native'
import { ScrollView, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { BookList } from '@/screens/test/_components/book-list'
import { CreateBookForm } from '@/screens/test/_components/create-book-form'

export default function TestIndexScreen() {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()

  return (
    <ScrollView
      style={[styles.container, { paddingTop: insets.top, paddingInline: 16 }]}
    >
      <Text style={styles.title}>Quản lý thư viện sách</Text>

      <CreateBookForm />

      <Button
        style={styles.button}
        onPress={() => navigation.navigate('test', { screen: 'bookList' })}
      >
        <Text>Xem danh mục sách</Text>
      </Button>

      <BookList limit={10} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 16,
  },

  button: {
    marginTop: 16,
  },
})
