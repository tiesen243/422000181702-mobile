import { useTheme } from '@react-navigation/native'
import { useState } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'

import type { Book } from '@/redux/slices/book.slice'

import { Button } from '@/components/ui/button'
import { RadioButton } from '@/components/ui/radio-button'
import { Text } from '@/components/ui/text'
import { useAppDispatch } from '@/redux/hooks'
import { add, STATUSES } from '@/redux/slices/book.slice'

const DEFAULT = {
  name: '',
  author: '',
  genre: '',
  publicYear: '',
  status: 'Dang cho muon',
} satisfies Omit<Book, 'id'>

export const CreateBookForm: React.FC = () => {
  const { colors } = useTheme()

  const dispatch = useAppDispatch()
  const [data, setData] = useState<Omit<Book, 'id'>>(DEFAULT)

  const create = () => {
    try {
      dispatch(add(data))
      setData(DEFAULT)
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

      <Button onPress={create}>
        <Text>Thêm mới</Text>
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
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
  },
})
