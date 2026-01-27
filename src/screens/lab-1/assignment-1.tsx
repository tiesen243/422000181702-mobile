import { StyleSheet, Text, View } from 'react-native'

import { Header } from '@/screens/lab-1/_components/header'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Assignment1Screen() {
  return (
    <View style={styles.container}>
      <Header title='tiêu đề app' />

      <View style={styles.main}>
        <Text style={styles.text}>Dòng chữ</Text>
      </View>
    </View>
  )
}

// function Header({ title }: { title: string }) {
//   const inset = useSafeAreaInsets()
//
//   return (
//     <View
//       style={[
//         styles.header,
//         {
//           paddingTop: inset.top,
//           paddingBottom: inset.bottom,
//           paddingInline: 16,
//         },
//       ]}
//     >
//       <Text style={styles.text}>{title}</Text>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3f5ec2',
  },

  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#0a0a0a',
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
    color: '#eff6ff',
  },
})
