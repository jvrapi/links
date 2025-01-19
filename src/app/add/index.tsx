import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { router } from "expo-router";

export default function Add() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[300]} />
        </TouchableOpacity>

        <Text style={styles.title}>
          Novo
        </Text>
      </View>

      <Text style={styles.label}>
        Selecione uma categoria
      </Text>
    </View>
  )
}