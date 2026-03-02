import { StyleSheet, View } from 'react-native'

import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { ThemeProvider, useTheme } from '@/screens/theories/context-api/context'

export default function ContextApiScreen() {
  return (
    <ThemeProvider>
      <ContextDemo />
    </ThemeProvider>
  )
}

function ContextDemo() {
  const { theme, toggleTheme } = useTheme()

  return (
    <View style={styles.container}>
      <Text>Current theme: {theme}</Text>
      <Button onPress={toggleTheme}>
        <Text>Toggle Theme</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
