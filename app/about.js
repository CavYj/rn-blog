import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react'; 

export default function About() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>关于页</Text>
      <Link href="/" style={{ marginTop: 20, color: 'blue' }}>
        返回首页
      </Link>
    </View>
  );
}