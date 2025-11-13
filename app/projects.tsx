import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";
import { ScrollView, Text, View } from "react-native";
import NavTile from "./components/NavTile";

export default function ProjectsScreen() {
  const projects = [
    {
      id: "1",
      title: "Portfolio App",
      desc: "A mobile-first portfolio built with Expo, React Native and Tailwind.",
    },
    {
      id: "2",
      title: "Task Manager",
      desc: "Cross-platform task app with offline sync and simple UI.",
    },
  ];

  return (
    <ScrollView className="flex-1 px-6 pt-16 bg-gray-900">
      <StatusBar style="light" />

      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 500 }}
      >
        <Text className="mb-3 text-2xl font-bold text-white">Projects</Text>
        <Text className="mb-6 text-gray-400">
          Selected projects and short descriptions.
        </Text>

        <View className="mb-6 space-y-3">
          {projects.map((p) => (
            <View key={p.id} className="p-4 bg-gray-800/40 rounded-xl">
              <Text className="font-semibold text-white">{p.title}</Text>
              <Text className="mt-1 text-gray-400">{p.desc}</Text>
            </View>
          ))}
        </View>

        <NavTile href={{ pathname: "/" }} title="Back to Home" />
      </MotiView>
    </ScrollView>
  );
}
