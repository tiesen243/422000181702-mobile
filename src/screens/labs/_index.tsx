import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Text } from '@/components/ui/text'

export default function LabsIndexScreen() {
  const navigation = useNavigation()

  return (
    <View className='flex-1 items-center justify-center px-4'>
      <Card>
        <CardHeader>
          <CardTitle>Labs</CardTitle>
          <CardDescription>
            Explore our collection of labs designed to help you learn and
            practice new skills.
          </CardDescription>
        </CardHeader>

        <CardContent className='gap-2'>
          {labs.map((item) => (
            <Button
              key={item.screen}
              onPress={() =>
                navigation.navigate('labs', { screen: item.screen })
              }
            >
              <Text>{item.name}</Text>
            </Button>
          ))}
        </CardContent>
      </Card>
    </View>
  )
}

const labs = [
  {
    name: 'Lab 1',
    screen: 'lab-1',
  },
] as const
