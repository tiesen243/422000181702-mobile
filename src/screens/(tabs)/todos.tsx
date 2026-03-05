import { useNavigation } from '@react-navigation/native'
import { FlatList, View } from 'react-native'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { useAllQuery } from '@/redux/slices/todos.slice'

export default function TodosScreen() {
  const { data: todos, isLoading, isError } = useAllQuery()
  const navigation = useNavigation()

  if (isLoading)
    return (
      <View className='flex-1 items-center justify-center px-4'>
        <Text>Loading...</Text>
      </View>
    )

  if (isError)
    return (
      <View className='flex-1 items-center justify-center px-4'>
        <Text className='text-red-500'>Failed to load todos.</Text>
      </View>
    )

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ gap: 16, padding: 16 }}
      renderItem={({ item }) => (
        <Card>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>
              {item.completed ? 'Completed' : 'Pending'}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              onPress={() => navigation.navigate('todo', { id: item.id })}
            >
              <Text>View Details</Text>
            </Button>
          </CardFooter>
        </Card>
      )}
    />
  )
}
