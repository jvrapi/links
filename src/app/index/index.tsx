import { Image, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

import { Category } from '@/components/category'
import { Categories } from '@/components/categories'

export default function Index() {
  return (
    <View>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity>
          <MaterialIcons name='add' size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />
    </View>
  )
}