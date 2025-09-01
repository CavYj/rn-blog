import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

// 必须默认导出React组件
export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>首页内容</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});