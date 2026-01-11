import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { counterActions } from '@/features/counter/counter.slice'
import { useAppDispatch, useAppSelector } from '@/store'

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Counter</CardTitle>
        <CardDescription>
          A simple counter example using Redux Toolkit.
        </CardDescription>
      </CardHeader>

      <CardContent className='gap-4'>
        <Text className='text-lg'>Count: {count}</Text>
        <Button onPress={() => dispatch(counterActions.increment())}>
          <Text>Increment</Text>
        </Button>
        <Button onPress={() => dispatch(counterActions.decrement())}>
          <Text>Decrement</Text>
        </Button>
      </CardContent>
    </Card>
  )
}
