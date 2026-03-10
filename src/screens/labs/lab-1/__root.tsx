import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { lazy } from 'react'

import Lab1IndexScreen from '@/screens/labs/lab-1/_index'

const Lab1 = createNativeStackNavigator({
  initialRouteName: 'index',

  screenOptions: {
    headerShown: false,
  },

  screens: {
    index: Lab1IndexScreen,
    'assignment-1': lazy(() => import('@/screens/labs/lab-1/assignment-1')),
    'assignment-2': lazy(() => import('@/screens/labs/lab-1/assignment-2')),
    'assignment-2-extra': lazy(
      () => import('@/screens/labs/lab-1/assignment-2-extra')
    ),
    'assignment-3': lazy(() => import('@/screens/labs/lab-1/assignment-3')),
    'assignment-4': lazy(() => import('@/screens/labs/lab-1/assignment-4')),
    'assignment-5': lazy(() => import('@/screens/labs/lab-1/assignment-5')),
  },
})

export default Lab1
