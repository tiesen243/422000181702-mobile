import '@/globals.css'

import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as ReduxProvider } from 'react-redux'
import { useUniwind } from 'uniwind'

import { Navigation } from '@/screens/__root'
import { store } from '@/store'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const { theme: colorscheme } = useUniwind()
  const theme = colorscheme === 'dark' ? DarkTheme : DefaultTheme

  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <Navigation theme={theme} onReady={() => SplashScreen.hideAsync()} />

        <StatusBar
          barStyle={colorscheme === 'dark' ? 'light-content' : 'dark-content'}
        />
      </ReduxProvider>
    </SafeAreaProvider>
  )
}
