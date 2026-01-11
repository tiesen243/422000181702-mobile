import { View } from 'react-native'

import { Counter } from '@/features/counter'
import { Infomation } from '@/features/information'

export default function IndexScreen() {
  return (
    <View className='flex-1 bg-background px-4 items-center justify-center gap-4'>
      <Counter />

      <Infomation
        user={{
          id: 22653991,
          name: 'Tran Tien',
          age: 21,
          className: 'Lorem Ipsum',
        }}
      />
    </View>
  )
}
