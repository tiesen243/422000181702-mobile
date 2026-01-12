import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Text } from '@/components/ui/text'

export default function LayoutScreen() {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.header}>
        <Text>Header</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.contentLeft}>
          <Text>Sidebar</Text>
        </View>

        <View style={styles.contentRight}>
          <Text>Main Content Area</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'red',
    padding: 16,
  },
  content: { flex: 1, flexDirection: 'row' },
  contentLeft: {
    backgroundColor: 'green',
    padding: 16,
    width: 100,
  },
  contentRight: {
    backgroundColor: 'blue',
    padding: 16,
    flex: 1,
  },
  footer: {
    backgroundColor: 'gray',
    padding: 16,
  },
})
