import { StyleSheet, View } from 'react-native'

export default function Assignment2Screen() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
      <Footer />
    </View>
  )
}

function Header() {
  return <View style={styles.header} />
}

function Content() {
  return <View style={styles.content} />
}

function Footer() {
  return <View style={styles.footer} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#00ff00',
  },

  content: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },

  footer: {
    height: 80,
    width: '100%',
    backgroundColor: 'gray',
  },
})
