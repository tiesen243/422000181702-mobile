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
        headerShown: false,
      },
    },

    'lab-1-1': {
      screen: lazy(() => import('@/screens/lab-1/assignment-1')),
      options: {
        title: 'Lab 1 - 1',
        headerShown: false,
      },
    },

    'lab-1-2': {
      screen: lazy(() => import('@/screens/lab-1/assignment-2')),
      options: {
        title: 'Lab 1 - 2',
        headerShown: false,
      },
    },

    'lab-1-2-extend': {
      screen: lazy(() => import('@/screens/lab-1/assignment-2-extend')),
      options: {
        title: 'Lab 1 - 2 - extend',
        headerShown: false,
      },
    },

    'lab-1-3': {
      screen: lazy(() => import('@/screens/lab-1/assignment-3')),
      options: {
        title: 'Lab 1 - 3',
        headerShown: false,
      },
    },

    'lab-1-4': {
      screen: lazy(() => import('@/screens/lab-1/assignment-4')),
      options: {
        title: 'Lab 1 - 4',
        headerShown: false,
      },
    },

    'lab-1-5': {
      screen: lazy(() => import('@/screens/lab-1/assignment-5')),
      options: {
        title: 'Lab 1 - 5',
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
