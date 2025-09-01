import { Link, useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

export default function Home() {

  // 获取导航实例
  const navigation = useNavigation();

  // 组件挂载时设置一次固定标题（因标题固定，无需依赖项）
  useEffect(() => {
    navigation.setOptions({
      title: '主页', // 固定标题
      // 可选：其他导航栏样式
      headerTintColor: 'green'
    });
  }, [navigation]); // 仅依赖navigation，组件挂载时执行一次


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