import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";
import { ScrollView, Text, View } from "react-native";
import NavTile from "./components/NavTile";

export default function SkillsScreen() {
  const skills = [
    "TypeScript",
    "React",
    "React Native",
    "Node.js",
    "GraphQL",
    "Tailwind / NativeWind",
  ];

  return (
    <ScrollView className="flex-1 px-6 pt-16 bg-gray-900">
      <StatusBar style="light" />

      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 500 }}
      >
        <Text className="text-2xl font-bold text-white mb-3">Skills</Text>
        <Text className="text-gray-400 mb-6">
          Tools and technologies I use frequently.
        </Text>

        <View className="flex-row flex-wrap gap-2 mb-6">
          {skills.map((s) => (
            <View
              key={s}
              className="bg-gray-800/40 rounded-full px-3 py-2 mr-2 mb-2"
            >
              <Text className="text-gray-100 text-sm">{s}</Text>
            </View>
          ))}
        </View>

        <NavTile href={{ pathname: "/" }} title="Back to Home" />
      </MotiView>
    </ScrollView>
  );
}
