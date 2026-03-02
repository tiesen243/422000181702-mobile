import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'

const assignmentList = [
  { name: 'Assignment 1', screen: 'lab-1-1' },
  { name: 'Assignment 2', screen: 'lab-1-2' },
  { name: 'Assignment 2 - extend', screen: 'lab-1-2-extend' },
  { name: 'Assignment 3', screen: 'lab-1-3' },
  { name: 'Assignment 4', screen: 'lab-1-4' },
  { name: 'Assignment 5', screen: 'lab-1-5' },
] as const

export default function Lab1IndexScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {assignmentList.map((assignment) => (
        <Text
          key={assignment.screen}
          style={styles.labLink}
          onPress={() =>
            navigation.navigate('lab-1', { screen: assignment.screen })
          }
        >
          {assignment.name}
        </Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingInline: 16,
  },

  labLink: {
    marginTop: 8,
    fontSize: 20,
    color: '#3f5ec2',
  },
})
