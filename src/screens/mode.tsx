import { useState } from 'react'
import { View } from 'react-native'

import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

export default function ModeScreen() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
      }}
    >
      <Button
        onPress={() =>
          setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
        }
      >
        <Text style={{ color: '#ffffff' }}>
          Current Theme: {theme}. Tap to toggle theme.
        </Text>
      </Button>
    </View>
  )
}
