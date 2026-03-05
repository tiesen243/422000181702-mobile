import * as React from 'react'
import { View } from 'react-native'

import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { Text } from '@/components/ui/text'

export default function Assignment4Screen() {
  const [isVisible, setIsVisible] = React.useState(true)

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingInline: 16,
      }}
    >
      <Card style={{ width: '100%' }}>
        <CardHeader>
          <Button
            style={{ width: '100%' }}
            onPress={() => setIsVisible((prev) => !prev)}
          >
            <Text>{isVisible ? 'Ẩn' : 'Hiện'}</Text>
          </Button>

          {isVisible ? <Text>đoạn text</Text> : <Text>&nbsp;</Text>}
        </CardHeader>
      </Card>
    </View>
  )
}
