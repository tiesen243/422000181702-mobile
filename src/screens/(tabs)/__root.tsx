import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CalculatorIcon, HomeIcon, ListTodoIcon } from 'lucide-react-native'
import { lazy } from 'react'

const Tabs = createBottomTabNavigator({
  screenOptions: {
    tabBarShowLabel: false,
  },

  screens: {
    index: {
      screen: lazy(() => import('@/screens/(tabs)/_index')),
      options: {
        title: 'Home',
        tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={size} />,
      },
    },

    counter: {
      screen: lazy(() => import('@/screens/(tabs)/counter')),
      options: {
        title: 'Counter',
        tabBarIcon: ({ color, size }) => (
          <CalculatorIcon color={color} size={size} />
        ),
      },
    },

    todos: {
      screen: lazy(() => import('@/screens/(tabs)/todos')),
      options: {
        title: 'Todos',
        tabBarIcon: ({ color, size }) => (
          <ListTodoIcon color={color} size={size} />
        ),
      },
    },
  },
})

export default Tabs
