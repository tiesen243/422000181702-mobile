import { DarkTheme, useNavigation, useTheme } from '@react-navigation/native'
import { useState } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'

import type { Book } from '@/redux/slices/book.slice'

import { Button } from '@/components/ui/button'
import { RadioButton } from '@/components/ui/radio-button'
import { Text } from '@/components/ui/text'
import { useAppDispatch } from '@/redux/hooks'
import { edit, STATUSES } from '@/redux/slices/book.slice'

export const EditBookForm: React.FC<{
  book: Book
}> = ({ book }) => {
  const dispatch = useAppDispatch()
  const [data, setData] = useState<Book>(book)
  const { colors } = useTheme()

  const navigation = useNavigation()

  const save = () => {
    try {
      dispatch(edit(data))
      navigation.navigate('test', { screen: 'index' })
    } catch (error) {
      Alert.alert(
        'Error',
        error instanceof Error ? error.message : 'Unknow error'
      )
    }
  }

  return (
    <View style={styles.fieldGroup}>
      <View style={styles.field}>
        <Text>Tên sách</Text>
        <TextInput
          style={[
            styles.fieldInput,
            { borderColor: colors.border, color: colors.text },
          ]}
          value={data.name}
          onChangeText={(value) =>
            setData((prev) => ({ ...prev, name: value }))
          }
        />
      </View>

      <View style={styles.field}>
        <Text>Tác giả</Text>
        <TextInput
          style={[
            styles.fieldInput,
            { borderColor: colors.border, color: colors.text },
          ]}
          value={data.author}
          onChangeText={(value) =>
            setData((prev) => ({ ...prev, author: value }))
          }
        />
      </View>

      <View style={styles.field}>
        <Text>Năm xuất bản</Text>
        <TextInput
          style={[
            styles.fieldInput,
            { borderColor: colors.border, color: colors.text },
          ]}
          value={data.publicYear}
          onChangeText={(value) =>
            setData((prev) => ({ ...prev, publicYear: value }))
          }
        />
      </View>

      <View style={[styles.field, { alignItems: 'flex-start' }]}>
        <Text>Trạng thái sách</Text>

        <View
          style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}
        >
          {STATUSES.map((status) => (
            <RadioButton
              key={status}
              checked={data.status === status}
              onPress={() => setData((prev) => ({ ...prev, status: status }))}
            >
              <Text>{status}</Text>
            </RadioButton>
          ))}
        </View>
      </View>

      <View style={styles.field}>
        <Text>Thể loại</Text>
        <TextInput
          style={[
            styles.fieldInput,
            { borderColor: colors.border, color: colors.text },
          ]}
          value={data.genre}
          onChangeText={(value) =>
            setData((prev) => ({ ...prev, genre: value }))
          }
        />
      </View>

      <Button onPress={save}>
        <Text>Lưu thay đổi</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  fieldGroup: {
    gap: 16,
  },

  field: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  fieldInput: {
    borderColor: DarkTheme.colors.border,
    color: DarkTheme.colors.text,
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
  },
})
