import * as React from 'react'
import { Alert, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'

export default function Assignment5Screen() {
  const insets = useSafeAreaInsets()

  const [value, setValue] = React.useState({ a: 0, b: 0, c: 0 })
  const [result, setResult] = React.useState({
    value: 0,
    isDouble: false,
  })

  const compute = () => {
    const { a, b, c } = value

    if (a === 0) {
      if (b === 0) {
        if (c === 0) Alert.alert('Phuong trinh co vo so nghiem!')
        else Alert.alert('Phuong trinh vo nghiem!')
      } else setResult((prev) => ({ ...prev, value: -c / b }))
    } else {
      const delta = b ** 2 - 4 * a * c
      if (delta < 0) Alert.alert('Phuong trinh vo nghiem!')
      else if (delta === 0) setResult({ isDouble: true, value: -b / (2 * a) })
      else setResult({ isDouble: false, value: (-b + delta ** -2) / (2 * a) })
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
      <FieldGroup>
        <FieldLegend>ax^2 + bx + c = 0</FieldLegend>

        <Field>
          <FieldLabel>Value of a</FieldLabel>
          <Input
            value={value.a.toString()}
            onChangeText={(val) => setValue((prev) => ({ ...prev, a: +val }))}
            keyboardType='numeric'
          />
        </Field>

        <Field>
          <FieldLabel>Value of b</FieldLabel>

          <Input
            value={value.b.toString()}
            onChangeText={(val) => setValue((prev) => ({ ...prev, b: +val }))}
            keyboardType='numeric'
          />
        </Field>

        <Field>
          <FieldLabel>Value of c</FieldLabel>

          <Input
            value={value.c.toString()}
            onChangeText={(val) => setValue((prev) => ({ ...prev, c: +val }))}
            keyboardType='numeric'
          />
        </Field>

        <Field>
          <Button onPress={compute}>
            <Text>Calculate</Text>
          </Button>
        </Field>

        <Field>
          <Text>
            Result:{' '}
            {result.isDouble
              ? result.value.toFixed(2)
              : `${result.value.toFixed(2)} or ${(result.value * -1).toFixed(2)}`}
          </Text>
        </Field>
      </FieldGroup>
    </View>
  )
}
