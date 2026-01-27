import { MinusIcon, PlusIcon } from 'lucide-react-native'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Text } from '@/components/ui/text'

export default function Assignment3Screen() {
  const insets = useSafeAreaInsets()

  const [count, setCount] = React.useState(0)

  return (
    <View
      style={{
        paddingTop: insets.top + 16,
        paddingBottom: insets.bottom,
        paddingInline: 16,
      }}
    >
      <Card>
        <CardContent style={styles.content}>
          <Button
            size='icon'
            onPress={() => setCount((prev) => (prev > 0 ? --prev : prev))}
          >
            <MinusIcon size={16} color='#ffffff' />
          </Button>

          <Value count={count} />

          <Button size='icon' onPress={() => setCount((prev) => ++prev)}>
            <PlusIcon size={16} color='#ffffff' />
          </Button>
        </CardContent>
      </Card>
    </View>
  )
}

function Value({ count }: { count: number }) {
  return <Text style={styles.text}>{count}</Text>
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    flex: 1,
    textAlign: 'center',
  },
})
