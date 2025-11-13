import { ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";
import NavTile from "./components/NavTile";

export default function ContactScreen() {
  return (
    <ScrollView className="flex-1 px-6 pt-16 bg-gray-900">
      <StatusBar style="light" />

      <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 500 }}>
        <Text className="mb-3 text-2xl font-bold text-white">Contact</Text>
        <Text className="mb-6 text-gray-400">I’d love to hear from you — here are ways to reach me.</Text>

        <View className="mb-6 space-y-3">
          <View className="p-4 bg-gray-800/40 rounded-xl">
            <Text className="font-semibold text-white">Email</Text>
            <Text className="mt-1 text-gray-400">gettie@example.com</Text>
          </View>

          <View className="p-4 bg-gray-800/40 rounded-xl">
            <Text className="font-semibold text-white">Twitter</Text>
            <Text className="mt-1 text-gray-400">@Gettie</Text>
          </View>
        </View>

        <NavTile href={{ pathname: "/" }} title="Back to Home" />
      </MotiView>
    </ScrollView>
  );
}
