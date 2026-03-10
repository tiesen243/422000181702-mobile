import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LabsIndexScreen from '@/screens/labs/_index'
import Lab1 from '@/screens/labs/lab-1/__root'
import Lab2 from '@/screens/labs/lab-2/__root'

const Labs = createNativeStackNavigator({
  initialRouteName: 'index',

  screenOptions: {
    headerShown: false,
  },

  screens: {
    index: LabsIndexScreen,
    'lab-1': Lab1,
    'lab-2': Lab2,
  },
})

export default Labs
