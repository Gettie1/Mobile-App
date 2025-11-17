import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";
import { Image, ScrollView, Text, View, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ScrollView 
      className="flex-1 bg-gray-900" 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <StatusBar style="light" />

      {/* Main Content */}
      <View className="px-5 pt-12 pb-6">
        {/* Profile Card */}
        <View className="items-center mb-10">
          <MotiView
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 800 }}
          >
            <View className="items-center w-full max-w-[95%] p-6 bg-gray-800 rounded-3xl border border-gray-700">
              <View className="p-1 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                <Image
                  source={require("../assets/images/profile.jpg")}
                  className="border-4 border-gray-900 rounded-full"
                  style={{ 
                    width: screenWidth * 0.35,
                    height: screenWidth * 0.35,
                    maxWidth: 140,
                    maxHeight: 140
                  }}
                  resizeMode="cover"
                />
              </View>
              
              <Text className="mb-2 text-2xl font-bold text-center text-white">
                Hi, I&apos;m Gettie <Text className="text-xl">👋</Text>
              </Text>
              
              <View className="px-3 py-1 mb-3 border rounded-full bg-blue-500/20 border-blue-500/30">
                <Text className="text-sm font-medium text-blue-300">Fullstack Developer</Text>
              </View>
              
              <Text className="text-center text-gray-300 text-sm leading-5 max-w-[280px]">
                I build delightful web and mobile experiences using React, TypeScript, and modern design systems.
              </Text>
            </View>
          </MotiView>
        </View>

        {/* About Section */}
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 200, duration: 600 }}
          className="mb-8"
        >
          <View className="flex-row items-center mb-3">
            <View className="w-1 h-5 mr-3 bg-blue-500 rounded-full" />
            <Text className="text-xl font-bold text-white">About Me</Text>
          </View>
          
          <View className="p-4 border bg-gray-800/50 rounded-xl border-gray-700/30">
            <Text className="text-sm leading-6 text-gray-300">
              I am a passionate developer who loves clean design and smooth user experiences. I enjoy combining functionality with aesthetic appeal in every project I work on.
            </Text>
          </View>
        </MotiView>

        {/* Navigation Buttons */}
        <MotiView
          from={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 400, duration: 600 }}
          className="mb-12"
        >
          <View className="space-y-3">
            {/* Skills Button */}
            <MotiView
              from={{ opacity: 0, translateX: -10 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 500, duration: 400 }}
            >
              <Link href="/skills" asChild>
                <View className="flex-row items-center justify-between p-4 bg-gray-800 border border-gray-700 rounded-xl active:bg-gray-700">
                  <View className="flex-row items-center">
                    <View className="items-center justify-center w-8 h-8 mr-3 rounded-lg bg-blue-500/20">
                      <Text className="text-base text-blue-400">💼</Text>
                    </View>
                    <Text className="text-base font-semibold text-white">View My Skills</Text>
                  </View>
                  <Text className="text-lg font-bold text-blue-400">→</Text>
                </View>
              </Link>
            </MotiView>

            {/* Projects Button */}
            <MotiView
              from={{ opacity: 0, translateX: -10 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 600, duration: 400 }}
            >
              <Link href="/projects" asChild>
                <View className="flex-row items-center justify-between p-4 bg-gray-800 border border-gray-700 rounded-xl active:bg-gray-700">
                  <View className="flex-row items-center">
                    <View className="items-center justify-center w-8 h-8 mr-3 rounded-lg bg-green-500/20">
                      <Text className="text-base text-green-400">🚀</Text>
                    </View>
                    <Text className="text-base font-semibold text-white">See My Projects</Text>
                  </View>
                  <Text className="text-lg font-bold text-green-400">→</Text>
                </View>
              </Link>
            </MotiView>

            {/* Contact Button */}
            <MotiView
              from={{ opacity: 0, translateX: -10 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 700, duration: 400 }}
            >
              <Link href="/contact" asChild>
                <View className="flex-row items-center justify-between p-4 border bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl border-blue-400/30 active:opacity-90">
                  <View className="flex-row items-center">
                    <View className="items-center justify-center w-8 h-8 mr-3 rounded-lg bg-white/20">
                      <Text className="text-base text-white">📧</Text>
                    </View>
                    <Text className="text-base font-bold text-white">Get in Touch</Text>
                  </View>
                  <Text className="text-lg font-bold text-white">→</Text>
                </View>
              </Link>
            </MotiView>
          </View>
        </MotiView>

        {/* Footer */}
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 900, duration: 600 }}
          className="items-center"
        >
          <Text className="text-xs text-center text-gray-500">
            © {new Date().getFullYear()} Gettie – Built with 💬 using React Native
          </Text>
        </MotiView>
      </View>
    </ScrollView>
  );
}