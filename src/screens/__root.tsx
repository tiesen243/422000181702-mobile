import type { StaticParamList } from '@react-navigation/native'

import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { lazy } from 'react'

import Drawer from '@/screens/(drawer)/__root'
import Tabs from '@/screens/(tabs)/__root'
import Labs from '@/screens/labs/__root'
import Students from '@/screens/students/__root'

const RootStack = createNativeStackNavigator({
  initialRouteName: 'tabs',

  screenOptions: {
    headerShown: false,
  },

  screens: {
    tabs: Tabs,
    drawer: Drawer,
    labs: Labs,
    students: Students,
    login: lazy(() => import('@/screens/login')),
    todo: lazy(() => import('@/screens/todo')),
  },
})

export default createStaticNavigation(RootStack)

type RootStackParamList = StaticParamList<typeof RootStack>

declare global {
  // oxlint-disable-next-line typescript/no-namespace
  namespace ReactNavigation {
    // oxlint-disable-next-line typescript/no-empty-interface, typescript/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}
