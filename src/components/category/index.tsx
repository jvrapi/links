import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Text, Pressable, PressableProps } from "react-native"
import { styles } from "./styles"

type Props = PressableProps & {
  name: string
  isSelected?: boolean
  icon: keyof typeof MaterialIcons.glyphMap
}

export function Category({ icon, name, isSelected = false, ...props }: Props) {
  const color = isSelected ? colors.green[300] : colors.gray[400]
  return (
    <Pressable style={styles.container} {...props}>
      <MaterialIcons name={icon} size={16} color={color} />
      <Text style={[styles.name, { color }]}>{name}</Text>
    </Pressable>
  )
}

