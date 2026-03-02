import { useNavigation } from '@react-navigation/native'
import { Alert, View } from 'react-native'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { useForm } from '@/hooks/use-form'
import { useSession } from '@/hooks/use-session'

export default function SignInScreen() {
  const navigate = useNavigation()
  const { signIn } = useSession()

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: signIn,
    onSuccess: () => navigate.navigate('index'),
    onError: (error) =>
      Alert.alert('Sign in failed', error.message || 'An error occurred'),
  })

  return (
    <View style={{ flex: 1, padding: 16, gap: 16 }}>
      <form.Field
        name='email'
        render={({ field: { value, onChange }, meta: { errors } }) => (
          <View>
            <Text>Email</Text>
            <Input value={value} onChangeText={onChange} />
            {errors.length > 0 && (
              <Text style={{ color: 'red' }}>{errors.join(', ')}</Text>
            )}
          </View>
        )}
      />

      <form.Field
        name='password'
        render={({ field: { value, onChange }, meta: { errors } }) => (
          <View>
            <Text>Password</Text>
            <Input value={value} onChangeText={onChange} secureTextEntry />
            {errors.length > 0 && (
              <Text style={{ color: 'red' }}>{errors.join(', ')}</Text>
            )}
          </View>
        )}
      />

      <Button onPress={() => form.handleSubmit()}>
        <Text>Sign In</Text>
      </Button>
    </View>
  )
}
