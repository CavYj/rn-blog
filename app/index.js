import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'; 

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>欢迎进入杨钧的个人博客</Text>
      <StatusBar style="auto" />
      <Link href="/about" style={{ marginTop: 20, color: 'blue' }}>
        前往关于页
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});