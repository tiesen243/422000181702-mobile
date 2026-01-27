import { View } from 'react-native'

import { Text } from '@/components/ui/text'

interface StuffProps {
  name: string
  age: number

  info: {
    title: string
  }

  childrens: {
    id: number
    value: string
  }[]
}

export function Stuff({ name, age, info, childrens }: StuffProps) {
  return (
    <View style={{ paddingBlock: 16 }}>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Info: {JSON.stringify(info, null, 2)}</Text>
      <Text>Childrens:</Text>
      {childrens.map((child) => (
        <Text key={child.id} style={{ paddingLeft: 8 }}>
          {child.id}: {child.value}
        </Text>
      ))}
    </View>
  )
}
