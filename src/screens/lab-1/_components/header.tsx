import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function Header({ title }: { title: string }) {
  const inset = useSafeAreaInsets()

  return (
    <View
      style={[
        styles.header,
        {
          paddingTop: inset.top,
          paddingBottom: inset.bottom,
          paddingInline: 16,
        },
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#0a0a0a',
  },

  text: {
    fontSize: 24,
    color: '#eff6ff',
  },
})
