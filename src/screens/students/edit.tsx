import type { StaticScreenProps } from '@react-navigation/native'

import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { updateStudent } from '@/redux/slices/student.slice'

type StudentsEditScreenProps = StaticScreenProps<{
  id: string
}>

export default function StudentsEditScreen({
  route: {
    params: { id },
  },
}: StudentsEditScreenProps) {
  const student = useAppSelector((state) =>
    state.student.find((s) => s.id === id)
  )
  const dispatch = useAppDispatch()
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const [name, setName] = useState(student?.name ?? '')

  if (!student)
    return (
      <View
        className='flex-1 items-center justify-center px-4'
        style={{ paddingTop: insets.top }}
      >
        <Text className='text-red-500'>Student not found.</Text>
      </View>
    )

  return (
    <View className='flex-1 p-4' style={{ paddingTop: insets.top }}>
      <Text variant='h1'>Edit Student: {student.id}</Text>

      <Input
        value={name}
        onChange={(e) => setName(e.nativeEvent.text)}
        placeholder='Student Name'
        className='mb-4'
      />
      <Button
        onPress={() => {
          dispatch(updateStudent({ id, name }))
          navigation.goBack()
        }}
      >
        <Text>Save Changes</Text>
      </Button>
    </View>
  )
}
