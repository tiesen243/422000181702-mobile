import { StyleSheet, View } from 'react-native'

import { Text } from '@/components/ui/text'

export default function Assignment2Screen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Content />
      <Footer />
    </View>
  )
}

function Header() {
  return (
    <View style={[styles.header, styles.center]}>
      <Text>Header</Text>
    </View>
  )
}

function Content() {
  return (
    <View style={styles.content}>
      <View style={[styles.center, { flex: 1 }]}>
        <Text>Menu</Text>
      </View>

      <View style={styles.main}>
        <View style={styles.wrapper}>
          <View style={[styles.center, { flex: 1 }]}>
            <Text>Comp A</Text>
          </View>

          <View style={[styles.center, { flex: 1 }]}>
            <Text>Comp B</Text>
          </View>
        </View>

        <View style={[styles.center, { flex: 2 }]}>
          <Text>Comp C</Text>
        </View>
      </View>
    </View>
  )
}

function Footer() {
  return (
    <View style={[styles.footer, styles.center]}>
      <Text>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingInline: 16,
    borderWidth: 1,
    borderColor: '#242424',
  },

  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#00ff00',
  },

  content: {
    flex: 1,
    flexDirection: 'row',
  },

  main: {
    flex: 2,
  },

  wrapper: {
    flexDirection: 'row',
    flex: 1,
  },

  footer: {
    height: 80,
    width: '100%',
    backgroundColor: 'gray',
  },
})
