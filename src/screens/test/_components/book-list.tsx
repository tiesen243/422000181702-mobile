import { useNavigation, useTheme } from '@react-navigation/native'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'

import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { remove } from '@/redux/slices/book.slice'

export const BookList: React.FC<{ limit?: number }> = ({ limit = 3 }) => {
  const books = useAppSelector((state) => state.book.books.slice(0, limit))
  const tableHead = ['Tên sách', 'Tác giả', 'Năm XB', 'Hành động']

  const { colors } = useTheme()
  const navigation = useNavigation()
  const dispatch = useAppDispatch()

  return (
    <ScrollView
      horizontal
      style={styles.tableContainer}
      showsHorizontalScrollIndicator={false}
    >
      <View style={{ minWidth: 600 }}>
        <View style={styles.tableContainer}>
          <View style={[styles.tableRow, { borderBottomColor: colors.border }]}>
            {tableHead.map((header, index) => (
              <View
                // oxlint-disable-next-line react/no-array-index-key
                key={index}
                style={[
                  styles.tableHeaderCell,
                  { backgroundColor: colors.card },
                ]}
              >
                <Text style={styles.headerText}>{header}</Text>
              </View>
            ))}
          </View>

          <FlatList
            data={books}
            renderItem={({ item }) => (
              <View key={item.id} style={styles.tableRow}>
                <View style={styles.tableCell}>
                  <Text>{item.name}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{item.author}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{item.publicYear}</Text>
                </View>
                <View style={[styles.tableCell, styles.actionCell]}>
                  <Button
                    onPress={() =>
                      navigation.navigate('test', {
                        screen: 'edit',
                        params: { id: item.id },
                      })
                    }
                  >
                    <Text>Chỉnh sửa</Text>
                  </Button>

                  <Button
                    variant='destructive'
                    onPress={() => dispatch(remove({ id: item.id }))}
                  >
                    <Text>Xóa</Text>
                  </Button>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  tableContainer: {
    padding: 16,
  },

  headerText: {
    fontWeight: 'bold',
  },

  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },

  tableHeaderCell: {
    flex: 1,
    padding: 10,
    width: 100,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  tableCell: {
    flex: 1,
    padding: 10,
    width: 100,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  actionCell: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
})
