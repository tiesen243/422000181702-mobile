import { View } from 'react-native'

import { Text } from '@/components/ui/text'

interface InfomationProps {
  user: {
    id: number
    name: string
    age: number
    className: string
  }
}

export const Infomation: React.FC<InfomationProps> = ({ user }) => (
  <View className='bg-card rounded-xl p-4 border border-border w-full'>
    {user.age >= 18 ? (
      <Text className='mb-2 text-green-500'>User is an adult.</Text>
    ) : (
      <Text className='mb-2 text-red-500'>User is a minor.</Text>
    )}
    <Text>{JSON.stringify(user, null, 2)}</Text>
  </View>
)
