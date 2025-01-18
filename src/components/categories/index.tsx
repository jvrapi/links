import { FlatList } from 'react-native'
import { styles } from './styles'
import { categories } from '@/utils/categories'
import { Category } from '../category'

export function Categories() {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Category icon={item.icon} name={item.name} />}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  )
}