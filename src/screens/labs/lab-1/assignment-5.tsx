import * as React from 'react'
import { Alert, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'

export default function Assignment5Screen() {
  const insets = useSafeAreaInsets()

  const [value, setValue] = React.useState({ a: '0', b: '0', c: '0' })
  const [result, setResult] = React.useState({
    x1: null as number | null,
    x2: null as number | null,
  })

  const compute = () => {
    const [a = 0, b = 0, c = 0] = Object.values(value).map((val) =>
      Number.parseFloat(val.trim())
    )

    if (a === 0) {
      if (b === 0) {
        if (c === 0) Alert.alert('Phương trình có vô số nghiệm!')
        else Alert.alert('Phương trình vô nghiệm!')
      } else setResult({ x1: -c / b, x2: null })
    } else {
      const delta = b ** 2 - 4 * a * c
      if (delta < 0) {
        Alert.alert('Phương trình vô nghiệm!')
        setResult({ x1: null, x2: null })
      } else if (delta === 0) setResult({ x1: -b / (2 * a), x2: null })
      else
        setResult({
          x1: (-b + delta ** (1 / 2)) / (2 * a),
          x2: (-b - delta ** (1 / 2)) / (2 * a),
        })
    }
  }

  return (
    <View
      style={{
        paddingTop: insets.top + 16,
        paddingBottom: insets.bottom,
        paddingInline: 16,
      }}
    >
      <View style={{ gap: 16 }}>
        <Text>Giải phương trình bậc hai: ax^2 + bx + c = 0</Text>

        <View style={{ gap: 8 }}>
          <Text>Giá trị của a</Text>
          <Input
            value={value.a}
            onChangeText={(val) => setValue((prev) => ({ ...prev, a: val }))}
            keyboardType='numeric'
          />
        </View>

        <View style={{ gap: 8 }}>
          <Text>Giá trị của b</Text>

          <Input
            value={value.b}
            onChangeText={(val) => setValue((prev) => ({ ...prev, b: val }))}
            keyboardType='numeric'
          />
        </View>

        <View style={{ gap: 8 }}>
          <Text>Giá trị của c</Text>

          <Input
            value={value.c}
            onChangeText={(val) => setValue((prev) => ({ ...prev, c: val }))}
            keyboardType='numeric'
          />
        </View>

        <View style={{ gap: 8 }}>
          <Button onPress={compute}>
            <Text>Tính nghiệm</Text>
          </Button>

          <Text>
            Kết quả: {result.x1 !== null && `x1 = ${result.x1.toFixed(2)}`}
            {result.x2 !== null && `, x2 = ${result.x2.toFixed(2)}`}
          </Text>
        </View>
      </View>
    </View>
  )
}
