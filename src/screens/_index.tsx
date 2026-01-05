import { View, Text, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const items = [
  { id: 1, content: 'Lorem ipsum dolor sit amet' },
  { id: 2, content: 'Consectetur adipiscing elit' },
  { id: 3, content: 'Sed do eiusmod tempor incididunt' },
  { id: 4, content: 'Ut labore et dolore magna aliqua' },
  { id: 5, content: 'Ut enim ad minim veniam' },
  { id: 6, content: 'Quis nostrud exercitation ullamco' },
  { id: 7, content: 'Laboris nisi ut aliquip ex ea commodo consequat' },
  { id: 8, content: 'Duis aute irure dolor in reprehenderit' },
  { id: 9, content: 'In voluptate velit esse cillum dolore' },
  { id: 10, content: 'Eu fugiat nulla pariatur' },
]

export default function IndexScreen() {
  const insets = useSafeAreaInsets()

  return (
    <View
      className='flex-1 items-center justify-center bg-white'
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className='p-4 border-b border-gray-200 w-full'>
            <Text className='text-lg text-gray-800'>{item.content}</Text>
          </View>
        )}
      />
    </View>
  )
}
