import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@/components/ui/button'
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
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      {labs.map((lab) => (
        <View key={lab.title} style={[styles.lab, { marginBottom: 16 }]}>
          <Text>{lab.title}</Text>

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
        </View>
      ))}

      <Text style={styles.labTitle}>{JSON.stringify(user, null, 2)}</Text>
      <Button onPress={() => navigate.navigate('sign-in')}>
        <Text>Sign In</Text>
      </Button>
      <Button onPress={signOut}>
        <Text>Sign Out</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingInline: 16,
  },

  lab: {
    backgroundColor: '#0a0a0a',
    padding: 16,
    borderRadius: 8,
    borderColor: '#242424',
    borderWidth: 1,
  },

  labTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

  labLink: {
    marginTop: 8,
    fontSize: 20,
    color: '#3f5ec2',
  },
})
