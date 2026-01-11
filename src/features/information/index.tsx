import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Text } from '@/components/ui/text'

interface InfomationProps {
  user: {
    id: number
    name: string
    age: number
    className: string
  }
}

export const Infomation: React.FC<InfomationProps> = ({ user }) => (
  <Card className='w-full'>
    <CardHeader>
      <CardTitle>Information</CardTitle>
    </CardHeader>

    <CardContent>
      <Text>{JSON.stringify(user, null, 2)}</Text>
    </CardContent>

    <CardFooter>
      <Text>
        This user is a <Text>{user.age >= 18 ? 'Adult' : 'Minor'}</Text>
      </Text>
    </CardFooter>
  </Card>
)
