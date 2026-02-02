import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CogIcon, HomeIcon } from 'lucide-react-native'
import { lazy } from 'react'

import IndexScreen from '@/screens/(tabs)/_index'

const Tabs = createBottomTabNavigator({
  initialRouteName: 'index',
  screenOptions: {
    headerShown: false,
  },

  screens: {
    index: {
      screen: IndexScreen,
      initialParams: { title: 'Tabs Home' },
      options: {
        tabBarIcon: (props) => <HomeIcon {...props} />,
      },
    },

    settings: {
      screen: lazy(() => import('@/screens/(tabs)/settings')),
      options: {
        tabBarIcon: (props) => <CogIcon {...props} />,
      },
    },
  },
})

export default Tabs
