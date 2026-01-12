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

export default function LoginScreen() {
  const form = useForm({
    defaultValues: { email: '', password: '' },
    schema: type({ email: 'string.email', password: 'string<=6' }),
    onSubmit: (values) => {
      console.log('Login values:', values)
    },
  })

  return (
    <View className='flex-1 justify-center items-center px-4'>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Please enter your credentials to log in.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <FieldGroup>
            <form.Field
              name='email'
              render={({ field: { value, onChange }, meta: { errors } }) => (
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    value={value}
                    onChangeText={onChange}
                    keyboardType='email-address'
                  />
                  <FieldError errors={errors} />
                </Field>
              )}
            />

            <form.Field
              name='password'
              render={({ field: { value, onChange }, meta: { errors } }) => (
                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <Input
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry
                  />
                  <FieldError errors={errors} />
                </Field>
              )}
            />
          </FieldGroup>
        </CardContent>

        <CardFooter>
          <Button
            onPress={form.handleSubmit}
            className='w-full'
            disabled={form.state.isPending}
          >
            <Text>Log In</Text>
          </Button>
        </CardFooter>
      </Card>
    </View>
  )
}
