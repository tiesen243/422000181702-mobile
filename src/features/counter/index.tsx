import { View } from 'react-native'

import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { counterActions } from '@/features/counter/counter.slice'
import { useAppDispatch, useAppSelector } from '@/store'

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <View className='bg-card rounded-xl p-4 border border-border w-full gap-4'>
      <Text className='text-lg'>Count: {count}</Text>
      <Button onPress={() => dispatch(counterActions.increment())}>
        <Text>Increment</Text>
      </Button>
      <Button onPress={() => dispatch(counterActions.decrement())}>
        <Text>Decrement</Text>
      </Button>
    </View>
  )
}
