import type { StaticParamList } from '@react-navigation/native'

import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { lazy } from 'react'

import IndexScreen from '@/screens/_index'

const RootStack = createNativeStackNavigator({
  screens: {
    index: {
      screen: IndexScreen,
      options: {
        title: 'Home',
      },
    },
    login: {
      screen: lazy(() => import('@/screens/login')),
      options: {
        title: 'Login',
      },
    },
    sum: {
      screen: lazy(() => import('@/screens/sum')),
      options: {
        title: 'Sum',
      },
    },
    layout: {
      screen: lazy(() => import('@/screens/layout')),
      options: {
        title: 'Layout',
        headerShown: false,
      },
    },
  },
})

export const Navigation = createStaticNavigation(RootStack)

declare global {
  type RootStackParamList = StaticParamList<typeof RootStack>

  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
