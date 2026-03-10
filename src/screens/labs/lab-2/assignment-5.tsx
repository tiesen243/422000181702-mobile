import { FlatList, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Card, CardHeader } from '@/components/ui/card'
import { Text } from '@/components/ui/text'

export default function Assignment5Screen() {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <FlatList
        data={['Teo', 'Ty', 'Bin', 'Bo']}
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item }) => (
          <Card>
            <CardHeader>
              <Text>{item}</Text>
            </CardHeader>
          </Card>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  item: {
    padding: 8,
    borderBottomWidth: 1,
  },
})
