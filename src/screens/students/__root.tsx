import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { lazy } from 'react'

const Students = createNativeStackNavigator({
  initialRouteName: 'index',

  screenOptions: {
    headerShown: false,
  },

  screens: {
    index: lazy(() => import('@/screens/students/_index')),
    edit: lazy(() => import('@/screens/students/edit')),
  },
})

export default Students
