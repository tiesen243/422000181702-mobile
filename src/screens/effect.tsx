import * as React from 'react'
import { View } from 'react-native'

import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

export default function EffectScreen() {
  const [count, setCount] = React.useState(25)

  React.useEffect(() => {
    if (count === 0) return

    const interval = setInterval(() => {
      setCount((prevCount) => --prevCount)
    }, 1000)

    return () => clearInterval(interval)
  }, [count])

  return (
    <View className='flex-1 px-4 items-center justify-center gap-4'>
      <Text>Effect Screen</Text>
      <Text>Count: {count}</Text>

      <Button onPress={() => setCount(25)}>
        <Text>Reset Count</Text>
      </Button>
    </View>
  )
}
