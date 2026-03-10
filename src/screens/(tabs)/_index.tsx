// oxlint-disable promise/prefer-await-to-callbacks, promise/prefer-await-to-then

import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { logout } from '@/redux/slices/auth.slice'

export default function IndexScreen() {
  const auth = useAppSelector((state) => state.auth)
  const navigation = useNavigation()
  const dispatch = useAppDispatch()

  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-2xl font-bold'>Welcome to the Home Screen!</Text>

      <Button size='sm' onPress={() => navigation.navigate('drawer')}>
        <Text>Go to Drawer</Text>
      </Button>

      {auth.isAuthenticated ? (
        <View className='mt-8 w-full gap-4 px-4'>
          <Text className='text-lg'>Hello, {auth.user?.name}!</Text>

          <Button size='sm' onPress={() => navigation.navigate('labs')}>
            <Text>Go to Labs</Text>
          </Button>

          <Button
            size='sm'
            onPress={() => navigation.navigate('students', { screen: 'index' })}
          >
            <Text>Go to Student</Text>
          </Button>

          <Button
            size='sm'
            variant='destructive'
            onPress={() => dispatch(logout())}
          >
            <Text>Logout</Text>
          </Button>
        </View>
      ) : (
        <View className='mt-8 w-full gap-4 px-4'>
          <Text className='text-lg'>You are not logged in.</Text>
          <Button size='sm' onPress={() => navigation.navigate('login')}>
            <Text>Login</Text>
          </Button>
        </View>
      )}
    </View>
  )
}
