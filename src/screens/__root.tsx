import type { StaticParamList } from '@react-navigation/native'

import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { lazy } from 'react'

import IndexScreen from '@/screens/_index'
import Lab1Root from '@/screens/labs/lab-1/__root'
import Tabs from '@/screens/theories/(tabs)/__root'

const RootStack = createNativeStackNavigator({
  initialRouteName: 'index',

  screens: {
    index: {
      screen: IndexScreen,
      options: {
        title: 'Home',
        headerShown: false,
      },
    },

    // Theories
    tabs: {
      screen: Tabs,
    },
    'context-api': {
      screen: lazy(() => import('@/screens/theories/context-api')),
    },

    // Labs
    'lab-1': {
      screen: Lab1Root,
      options: {
        headerShown: false,
      },
    },

    // Others
    'sign-in': {
      screen: lazy(() => import('@/screens/sign-in')),
    },
  },
})

export const Navigation = createStaticNavigation(RootStack)

declare global {
  type RootStackParamList = StaticParamList<typeof RootStack>

  // oxlint-disable-next-line typescript/no-namespace
  namespace ReactNavigation {
    // oxlint-disable-next-line typescript/no-empty-interface, typescript/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}
