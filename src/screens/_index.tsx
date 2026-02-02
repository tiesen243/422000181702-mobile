import { Link } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Stuff } from '@/components/stuff'

const labs = [
  {
    title: 'Theory',
    assignments: [{ title: 'Tabs Navigation', screen: 'tabs' }],
  },
  {
    title: 'Lab 1',
    assignments: [
      { title: 'Assignment 1', screen: 'lab-1-1' },
      { title: 'Assignment 2', screen: 'lab-1-2' },
      { title: 'Assignment 2 - Extend', screen: 'lab-1-2-extend' },
      { title: 'Assignment 3', screen: 'lab-1-3' },
      { title: 'Assignment 4', screen: 'lab-1-4' },
      { title: 'Assignment 5', screen: 'lab-1-5' },
    ],
  },
] as const

export default function IndexScreen() {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      {labs.map((lab) => (
        <View key={lab.title} style={[styles.lab, { marginBottom: 16 }]}>
          <Text style={styles.labTitle}>{lab.title}</Text>

          {lab.assignments.map((assignment) => (
            <Link
              key={assignment.screen}
              screen={assignment.screen}
              style={styles.labLink}
            >
              {assignment.title}
            </Link>
          ))}
        </View>
      ))}

      <Stuff
        name='Example Name'
        age={30}
        info={{ title: 'Example Title' }}
        childrens={[
          { id: 1, value: 'Child 1' },
          { id: 2, value: 'Child 2' },
        ]}
      />
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
