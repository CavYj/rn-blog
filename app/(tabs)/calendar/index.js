import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function CalendarPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>日历</Text>
      <Text style={styles.desc}>大型 app 首页内容区（可放列表、轮播等）</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  desc: {
    color: "#666",
  },
});