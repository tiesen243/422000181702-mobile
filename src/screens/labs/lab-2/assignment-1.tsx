import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'

export default function Assignment1Screen() {
  const [fahrenheit, setFahrenheit] = React.useState('')
  const [celsius, setCelsius] = React.useState('')

  const convertToCelsius = () => {
    const fahrenheitValue = Number.parseFloat(fahrenheit)
    if (Number.isNaN(fahrenheitValue)) return

    const celsiusValue = ((fahrenheitValue - 32) * 5) / 9
    setCelsius(celsiusValue.toFixed(2))
  }

  const convertToFahrenheit = () => {
    const celsiusValue = Number.parseFloat(celsius)
    if (Number.isNaN(celsiusValue)) return

    const fahrenheitValue = (celsiusValue * 9) / 5 + 32
    setFahrenheit(fahrenheitValue.toFixed(2))
  }

  const handleClear = () => {
    setFahrenheit('')
    setCelsius('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Fahrenheit</Text>
        <Input value={fahrenheit} onChangeText={setFahrenheit} />
      </View>

      <View style={styles.field}>
        <Text>Celsius</Text>
        <Input value={celsius} onChangeText={setCelsius} />
      </View>

      <View style={styles.buttons}>
        <Button style={styles.button} onPress={convertToCelsius}>
          <Text>Convert to Celsius</Text>
        </Button>

        <Button style={styles.button} onPress={convertToFahrenheit}>
          <Text>Convert to Fahrenheit</Text>
        </Button>
      </View>

      <Button variant='outline' onPress={handleClear}>
        <Text>Clear</Text>
      </Button>
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
    gap: 4,
  },
  buttons: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    flex: 1,
  },
})
