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

export default function Lab2IndexScreen() {
  const navigation = useNavigation()

  return (
    <View className='flex-1 items-center justify-center px-4'>
      <Card>
        <CardHeader>
          <CardTitle>Lab 2</CardTitle>
          <CardDescription>
            This is the first lab in our series. Here, you will learn the basics
            of React Native development.
          </CardDescription>
        </CardHeader>

        <CardContent className='gap-2'>
          {assignments.map((item) => (
            <Button
              key={item.screen}
              onPress={() =>
                navigation.navigate('labs', {
                  screen: 'lab-2',
                  params: { screen: item.screen },
                })
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

const assignments = [
  { name: 'Assignment 1', screen: 'assignment-1' },
  { name: 'Assignment 2', screen: 'assignment-2' },
  { name: 'Assignment 3', screen: 'assignment-3' },
  { name: 'Assignment 4', screen: 'assignment-4' },
  { name: 'Assignment 5', screen: 'assignment-5' },
  { name: 'Assignment 6', screen: 'assignment-6' },
] as const
