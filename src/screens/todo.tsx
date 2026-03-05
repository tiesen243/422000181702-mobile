import type { StaticScreenProps } from '@react-navigation/native'

import { View } from 'react-native'

import { Text } from '@/components/ui/text'
import { useByIdQuery } from '@/redux/slices/todos.slice'

type TodoScreenProps = StaticScreenProps<{
  id: number
}>

export default function TodoScreen({ route: { params } }: TodoScreenProps) {
  const { data: todo, isLoading, isError } = useByIdQuery(params.id)

  if (isLoading)
    return (
      <View className='flex-1 items-center justify-center px-4'>
        <Text>Loading...</Text>
      </View>
    )

  if (isError)
    return (
      <View className='flex-1 items-center justify-center px-4'>
        <Text className='text-red-500'>Failed to load todo details.</Text>
      </View>
    )

  return (
    <View className='flex-1 items-center justify-center px-4'>
      <Text className='mb-4 text-2xl font-bold'>{todo?.title}</Text>
      <Text className='text-lg'>
        Status: {todo?.completed ? 'Completed' : 'Pending'}
      </Text>
    </View>
  )
}
