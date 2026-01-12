import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Counter } from '@/features/counter'

export default function IndexScreen() {
  const navigation = useNavigation()

  return (
    <View className='flex-1 px-4 items-center justify-center gap-4'>
      <Counter />

      <Button
        onPress={() => navigation.navigate('sum', { title: 'Sum 2 Numbers' })}
      >
        <Text>Go to Sum Screen</Text>
      </Button>

      <Button onPress={() => navigation.navigate('login')}>
        <Text>Go to Login Screen</Text>
      </Button>

      <Button onPress={() => navigation.navigate('layout')}>
        <Text>Go to Layout Screen</Text>
      </Button>
    </View>
  )
}
