import type { StaticScreenProps } from '@react-navigation/native'

import { type } from 'arktype'
import { View } from 'react-native'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { useForm } from '@/hooks/use-form'

export default function SumScreen({
  route: { params },
}: StaticScreenProps<{ title: string }>) {
  const form = useForm({
    defaultValues: { num1: '', num2: '' },
    schema: type({ num1: /^\d+$/, num2: /^\d+$/ }),
    onSubmit: (values) => parseInt(values.num1, 10) + parseInt(values.num2, 10),
  })

  return (
    <View className='flex-1 justify-center items-center px-4'>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>{params.title}</CardTitle>
          <CardDescription>
            Enter two numbers to calculate their sum.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <FieldGroup>
            <form.Field
              name='num1'
              render={({ field: { value, onChange }, meta: { errors } }) => (
                <Field>
                  <FieldLabel>Number 1</FieldLabel>
                  <Input
                    value={value}
                    onChangeText={onChange}
                    placeholder='Enter first number'
                    keyboardType='numeric'
                  />
                  <FieldError errors={errors} />
                </Field>
              )}
            />

            <form.Field
              name='num2'
              render={({ field: { value, onChange }, meta: { errors } }) => (
                <Field>
                  <FieldLabel>Number 2</FieldLabel>
                  <Input
                    value={value}
                    onChangeText={onChange}
                    placeholder='Enter second number'
                    keyboardType='numeric'
                  />
                  <FieldError errors={errors} />
                </Field>
              )}
            />
          </FieldGroup>
        </CardContent>

        <CardFooter className='flex-col gap-4'>
          <Button onPress={form.handleSubmit} disabled={form.state.isPending}>
            <Text>Calculate</Text>
          </Button>

          <Text className='w-full'>Result: {form.state.getData()}</Text>
        </CardFooter>
      </Card>
    </View>
  )
}
