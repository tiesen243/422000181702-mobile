import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import IndexScreen from '@/screens/_index'

const RootStack = createNativeStackNavigator({
  screens: {
    index: {
      screen: IndexScreen,
      options: {
        title: 'Home',
      },
    },
  },
})

export const Navigation = createStaticNavigation(RootStack)
