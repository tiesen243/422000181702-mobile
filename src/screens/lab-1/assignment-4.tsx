import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

export default function Assignment4Screen() {
  const insets = useSafeAreaInsets()

  const [isVisible, setIsVisible] = React.useState(true)

  return (
    <View
      style={{
        paddingTop: insets.top + 16,
        paddingBottom: insets.bottom,
        paddingInline: 16,
        gap: 16,
      }}
    >
      <Button onPress={() => setIsVisible((prev) => !prev)}>
        <Text>{isVisible ? 'Ẩn' : 'Hiện'}</Text>
      </Button>

      {isVisible && <Text>đoạn text</Text>}
    </View>
  )
}
