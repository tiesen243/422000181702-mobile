import * as React from 'react'
import { Alert, StyleSheet, View } from 'react-native'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { RadioButton } from '@/components/ui/radio-button'
import { Text } from '@/components/ui/text'

interface Info {
  id: string
  name: string
  degree: (typeof DEGREES)[number]
  hobbies: (typeof HOBBIES)[number][]
  additionalInfo: string[]
}

export default function Assignment3Screen() {
  const [info, setInfo] = React.useState<Info>({
    id: '',
    name: '',
    degree: 'Trung cấp',
    hobbies: [],
    additionalInfo: [],
  })

  const handleSubmit = () => {
    try {
      const validatedInfo = validator(info)
      Alert.alert(
        'Thông cá nhân hợp',
        `${validatedInfo.name}
${validatedInfo.id}
${validatedInfo.degree}
${validatedInfo.hobbies.join(' - ')}
--------------------------------------------------
Thông tin bổ sung:
${validatedInfo.additionalInfo.join('\n')}
--------------------------------------------------`
      )
    } catch (error) {
      if (error instanceof Error)
        Alert.alert('Thông tin không hợp lệ', error.message)
      else
        Alert.alert(
          'Lỗi không xác định',
          'Đã có lỗi xảy ra khi kiểm tra thông tin'
        )
    }
  }

  return (
    <View style={styles.container}>
      <Text>Thông tin cá nhân</Text>
      <View style={styles.field}>
        <Text>Họ tên</Text>
        <Input
          style={styles.fieldInput}
          value={info.name}
          onChangeText={(text) => setInfo((prev) => ({ ...prev, name: text }))}
        />
      </View>

      <View style={styles.field}>
        <Text>Chứng minh nhân dân</Text>
        <Input
          style={styles.fieldInput}
          value={info.id}
          onChangeText={(text) => setInfo((prev) => ({ ...prev, id: text }))}
          keyboardType='numeric'
        />
      </View>

      <View style={styles.selectField}>
        <Text>Bằng cấp</Text>
        <View style={styles.selectOption}>
          {DEGREES.map((degree) => (
            <RadioButton
              key={degree}
              checked={info.degree === degree}
              onPress={() => setInfo((prev) => ({ ...prev, degree }))}
            >
              <Text>{degree}</Text>
            </RadioButton>
          ))}
        </View>
      </View>

      <View style={styles.selectField}>
        <Text>Sở thích</Text>
        <View style={styles.selectOption}>
          {HOBBIES.map((hobby) => (
            <Checkbox
              key={hobby}
              checked={info.hobbies.includes(hobby)}
              onPress={() =>
                setInfo((prev) => {
                  const hobbies = prev.hobbies.includes(hobby)
                    ? prev.hobbies.filter((h) => h !== hobby)
                    : [...prev.hobbies, hobby]
                  return { ...prev, hobbies }
                })
              }
            >
              <Text>{hobby}</Text>
            </Checkbox>
          ))}
        </View>
      </View>

      <View>
        <Text>Thông tin bổ sung</Text>

        <Input
          style={styles.additionalInfoInput}
          value={info.additionalInfo.join('\n')}
          onChangeText={(text) =>
            setInfo((prev) => ({ ...prev, additionalInfo: text.split('\n') }))
          }
          numberOfLines={4}
          multiline
        />
      </View>

      <Button onPress={handleSubmit}>
        <Text>Gửi thông tin</Text>
      </Button>
    </View>
  )
}

const DEGREES = ['Trung cấp', 'Cao đẳng', 'Đại học'] as const
const HOBBIES = ['Đọc báo', 'Đọc sách', 'Đọc coding'] as const

const validator = (info: Info) => {
  if (info.name.trim() === '') throw new Error('Tên người không được để trống')
  else if (info.name.trim().length < 3)
    throw new Error('Tên người phải có ít nhất 3 ký tự')

  if (Number.isNaN(Number.parseInt(info.id, 10)))
    throw new Error('Chứng minh nhân dân chỉ được nhập kiểu số')
  else if (info.id.trim().length !== 9)
    throw new Error('Chứng minh nhân dân phải có đúng 9 chữ số')

  if (!DEGREES.includes(info.degree))
    throw new Error('Bằng cấp không hợp lệ, vui lòng chọn lại')

  if (info.hobbies.some((hobby) => !HOBBIES.includes(hobby)))
    throw new Error('Sở thích không hợp lệ, vui lòng chọn lại')
  else if (!info.hobbies.length)
    throw new Error('Vui lòng chọn ít nhất một sở thích')

  return info
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 8,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
  },
  fieldInput: {
    width: '50%',
  },

  selectField: {
    gap: 4,
  },
  selectOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },

  additionalInfoInput: {
    height: 100,
    textAlignVertical: 'top',
  },
})
