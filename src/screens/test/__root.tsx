import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TestIndexScreen from '@/screens/test/_index'
import BooklistScreen from '@/screens/test/book-list'
import EditBookScreen from '@/screens/test/edit'

const Test = createNativeStackNavigator({
  initialRouteName: 'index',

  screenOptions: {
    headerShown: false,
  },

  screens: {
    index: TestIndexScreen,
    bookList: BooklistScreen,
    edit: EditBookScreen,
  },
})

export default Test
