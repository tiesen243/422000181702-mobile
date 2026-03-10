import { createDrawerNavigator } from '@react-navigation/drawer'
import { View } from 'react-native'

import { Text } from '@/components/ui/text'

const HomeScreen = () => (
  <View className='flex-1 items-center justify-center'>
    <Text>Home Screen</Text>
  </View>
)

const ProfileScreen = () => (
  <View className='flex-1 items-center justify-center'>
    <Text>Profile Screen</Text>
  </View>
)

const Drawer = createDrawerNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
})

export default Drawer
