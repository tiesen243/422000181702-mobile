import type { StaticScreenProps } from '@react-navigation/native'

import { View } from 'react-native'

import { Text } from '@/components/ui/text'

export default function IndexScreen({
  route,
}: StaticScreenProps<{ title: string }>) {
  return (
    <View>
      <Text>This is the Tabs Index Screen</Text>
      <Text>Title from route params: {route.params.title}</Text>
    </View>
  )
}
