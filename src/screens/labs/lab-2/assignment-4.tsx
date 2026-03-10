import type { ColorValue } from 'react-native'

import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useCSSVariable } from 'uniwind'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'

export default function Assignment4Screen() {
  const secondaryColor = useCSSVariable('--secondary') as ColorValue
  const [input, setInput] = React.useState('')
  const insets = useSafeAreaInsets()

  const handleButtonPress = (button: string) => {
    if (button === 'DELETE') setInput((prev) => prev.slice(0, -1))
    else if (button === '=') {
      try {
        // oxlint-disable-next-line no-eval
        const result = eval(input)
        setInput(result.toString())
      } catch {
        setInput('Error')
      }
    } else setInput((prev) => prev + button)
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Input
        style={styles.textarea}
        value={input}
        onChangeText={setInput}
        numberOfLines={4}
        multiline
      />

      <View>
        <View style={[styles.buttonRow, { marginBottom: 8 }]}>
          <View style={{ flex: 4, backgroundColor: secondaryColor }} />
          <Button
            variant='secondary'
            style={styles.button}
            onPress={() => handleButtonPress('DELETE')}
          >
            <Text>DELETE</Text>
          </Button>
        </View>

        <View style={styles.buttonColumn}>
          {numpadButtons.map((row, rowIndex) => (
            // oxlint-disable-next-line react/no-array-index-key
            <View key={rowIndex} style={styles.buttonRow}>
              {row.map((button) => (
                <Button
                  key={button}
                  variant={
                    Number.isNaN(Number.parseFloat(button)) && button !== '.'
                      ? 'secondary'
                      : 'default'
                  }
                  style={styles.button}
                  onPress={() => handleButtonPress(button)}
                >
                  <Text>{button}</Text>
                </Button>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 8,
  },

  textarea: {
    height: 100,
    textAlignVertical: 'bottom',
    textAlign: 'right',
  },

  buttonColumn: {
    flexDirection: 'column',
    gap: 8,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 8,
  },

  button: {
    flex: 1,
    borderRadius: 0,
  },
})

const numpadButtons = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['.', '0', '=', '+'],
] as const
