import { View, Text, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-900 px-6 pt-16">
      <StatusBar style="light" />

      {/* Profile Section */}
      <View className="items-center mb-10">
        <MotiView
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 800 }}
        >
          <Image
            source={require("../assets/images/profile.jpg")}
            className="w-32 h-32 rounded-full mb-4"
          />
          <Text className="text-white text-3xl font-bold">Hi, I’m Gettie 👋</Text>
          <Text className="text-gray-400 text-lg mt-1">Fullstack Developer</Text>
        </MotiView>
      </View>

      {/* About Section */}
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 300, duration: 600 }}
      >
        <Text className="text-white text-xl font-semibold mb-2">About Me</Text>
        <Text className="text-gray-400 leading-6 mb-6">
          I’m a passionate developer experienced in React, TypeScript, and building creative apps.
          I love combining functionality with clean design.
        </Text>
      </MotiView>

      {/* Navigation Links */}
      <View className="space-y-4">
        <Link href="/skills" className="text-blue-400 text-lg">
          → View My Skills
        </Link>
        <Link href="/projects" className="text-blue-400 text-lg">
          → See My Projects
        </Link>
        <Link href="/contact" className="text-blue-400 text-lg">
          → Get in Touch
        </Link>
      </View>
    </ScrollView>
  );
}
