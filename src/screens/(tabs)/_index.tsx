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

      {auth.isAuthenticated ? (
        <View className='justify-center gap-4'>
          <Text className='mt-4 text-lg'>Hello, {auth.user?.name}!</Text>
          <Button
            size='sm'
            onPress={() => navigation.navigate('students', { screen: 'index' })}
          >
            <Text>Go to Student</Text>
          </Button>

          <Button
            variant='destructive'
            size='sm'
            onPress={() => dispatch(logout())}
          >
            <Text>Logout</Text>
          </Button>
        </View>
      ) : (
        <>
          <Text className='mt-4 text-lg'>You are not logged in.</Text>
          <Button size='sm' onPress={() => navigation.navigate('login')}>
            <Text>Login</Text>
          </Button>
        </>
      )}

      <Button
        size='sm'
        className='mt-4'
        onPress={() => navigation.navigate('labs')}
      >
        <Text>Go to Labs</Text>
      </Button>
    </View>
  )
}
