import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { lazy } from 'react'

import Lab2IndexScreen from '@/screens/labs/lab-2/_index'

const Lab2 = createNativeStackNavigator({
  initialRouteName: 'index',

  screenOptions: {
    headerShown: false,
  },

  screens: {
    index: Lab2IndexScreen,
    'assignment-1': lazy(() => import('@/screens/labs/lab-2/assignment-1')),
    'assignment-2': lazy(() => import('@/screens/labs/lab-2/assignment-2')),
    'assignment-3': lazy(() => import('@/screens/labs/lab-2/assignment-3')),
    'assignment-4': lazy(() => import('@/screens/labs/lab-2/assignment-4')),
    'assignment-5': lazy(() => import('@/screens/labs/lab-2/assignment-5')),
    'assignment-6': lazy(() => import('@/screens/labs/lab-2/assignment-6')),
  },
})

export default Lab2
