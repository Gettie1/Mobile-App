import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

type Props = {
  href: any;
  title: string;
  subtitle?: string;
  primary?: boolean;
};

export default function NavTile({ href, title, subtitle, primary }: Props) {
  return (
    <Link href={href}>
      <View
        className={
          "flex-row items-center justify-between p-4 rounded-xl shadow-md " +
          (primary ? "bg-blue-500" : "bg-gray-800/40")
        }
      >
        <View className="flex-1">
          <Text className={primary ? "text-white font-semibold" : "text-white"}>
            {title}
          </Text>
          {subtitle ? (
            <Text className="mt-1 text-sm text-gray-400">{subtitle}</Text>
          ) : null}
        </View>
        <Text
          className={primary ? "text-white text-lg" : "text-blue-400 text-lg"}
        >
          →
        </Text>
      </View>
    </Link>
  );
}
