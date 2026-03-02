import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { useSession } from '@/hooks/use-session'

const labs = [
  {
    title: 'Theory',
    assignments: [
      { title: 'Tabs Navigation', screen: 'tabs' },
      { title: 'Context API', screen: 'context-api' },
    ],
  },
  {
    title: 'Labs',
    assignments: [{ title: 'Lab 1', screen: 'lab-1' }],
  },
] as const

export default function IndexScreen() {
  const navigate = useNavigation()
  const insets = useSafeAreaInsets()
  const { user, signOut } = useSession()

  return (
    <View
      style={[
        { flex: 1, paddingInline: 16 },
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      {labs.map((lab) => (
        <Card key={lab.title} style={{ marginBottom: 16 }}>
          <CardHeader>
            <Text variant='h4'>{lab.title}</Text>
          </CardHeader>

          <CardContent>
            {lab.assignments.map((assignment) => (
              <Button
                key={assignment.screen}
                variant='link'
                style={{ alignItems: 'flex-start' }}
                onPress={() => navigate.navigate(assignment.screen)}
              >
                <Text>{assignment.title}</Text>
              </Button>
            ))}
          </CardContent>
        </Card>
      ))}

      <Text>{JSON.stringify(user, null, 2)}</Text>
      <Button onPress={() => navigate.navigate('sign-in')}>
        <Text>Sign In</Text>
      </Button>
      <Button onPress={signOut}>
        <Text>Sign Out</Text>
      </Button>
    </View>
  )
}
