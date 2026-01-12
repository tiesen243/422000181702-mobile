import '@/globals.css'

import { DefaultTheme } from '@react-navigation/native'
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
  const theme =
    colorscheme === 'dark'
      ? {
          dark: true,
          colors: {
            primary: 'rgb(63, 94, 194)',
            background: 'rgb(0, 0, 0)',
            card: 'rgb(10, 10, 10)',
            text: 'rgb(255, 255, 255)',
            border: 'rgb(36, 36, 36)',
            notification: 'rgb(10, 10, 10)',
          },
          fonts: DefaultTheme.fonts,
        }
      : {
          dark: false,
          colors: {
            primary: 'rgb(0, 0, 0)',
            background: 'rgb(250, 250, 250)',
            card: 'rgb(255, 255, 255)',
            text: 'rgb(0, 0, 0)',
            border: 'rgb(228, 228, 228)',
            notification: 'rgb(255, 255, 255)',
          },
          fonts: DefaultTheme.fonts,
        }

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
