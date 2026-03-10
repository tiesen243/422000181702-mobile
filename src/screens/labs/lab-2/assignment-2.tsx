import * as React from 'react'
import { Alert, StyleSheet, View } from 'react-native'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'

export default function Assignment2Screen() {
  const [year, setYear] = React.useState(1900)
  const [lunarYear, setLunarYear] = React.useState('')

  const handleChange = (text: string) => {
    if (text.trim() === '') return setYear(1900)
    setYear(Number.parseInt(text, 10))
  }

  const handleConvert = () => {
    if (year < 1900)
      return Alert.alert('Lỗi', 'Năm phải lớn hơn hoặc bằng 1900')

    const can = CAN_CHI[year % 10]
    const chi = CHI[year % 12]
    setLunarYear(`${can} ${chi}`)
  }

  return (
    <View style={styles.container}>
      <Text>Chuyển đổi năm Dương Lịch</Text>

      <View style={styles.field}>
        <Text>Năm Dương Lịch</Text>
        <Input
          style={styles.fieldInput}
          value={year.toString()}
          onChangeText={handleChange}
          keyboardType='numeric'
        />
      </View>

      <Button onPress={handleConvert}>
        <Text>Chuyển đổi</Text>
      </Button>

      <Text>Năm Âm Lịch: {lunarYear ?? 'Chưa có kết quả'}</Text>
    </View>
  )
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
    gap: 4,
  },
  fieldInput: {
    flex: 1,
  },
})

const CAN_CHI = [
  'Giáp',
  'Ất',
  'Bính',
  'Đinh',
  'Mậu',
  'Kỷ',
  'Canh',
  'Tân',
  'Nhâm',
  'Quý',
]

const CHI = [
  'Tý',
  'Sửu',
  'Dần',
  'Mão',
  'Thìn',
  'Tỵ',
  'Ngọ',
  'Mùi',
  'Thân',
  'Dậu',
  'Tuất',
  'Hợi',
]
