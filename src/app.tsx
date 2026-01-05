import '@/globals.css'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import IndexScreen from '@/screens/_index'

export default function App() {
  return (
    <SafeAreaProvider>
      <IndexScreen />
    </SafeAreaProvider>
  )
}
