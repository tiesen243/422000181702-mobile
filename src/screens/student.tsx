import { FlatList, View } from 'react-native'

import type { Student } from '@/redux/slices/student.slice'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addStudent, deleteStudent } from '@/redux/slices/student.slice'

export default function StudentScreen() {
  const students = useAppSelector((state) => state.student)
  const dispatch = useAppDispatch()

  return (
    <View className='gap-4 px-4'>
      <Button
        onPress={() =>
          dispatch(
            addStudent({
              id: Date.now().toString(),
              name: `Student ${students.length + 1}`,
            })
          )
        }
      >
        <Text>Add Student</Text>
      </Button>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 16 }}
        renderItem={({ item }) => <StudentCard name={item.name} id={item.id} />}
      />
    </View>
  )
}

const StudentCard = ({ name, id }: Student) => {
  const dispatch = useAppDispatch()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>ID: {id}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button
          variant='destructive'
          onPress={() => dispatch(deleteStudent({ id }))}
        >
          <Text>Remove</Text>
        </Button>
      </CardFooter>
    </Card>
  )
}
