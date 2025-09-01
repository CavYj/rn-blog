import { Text, View } from 'react-native';
import { Link, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';

export default function About() {

  // 获取导航实例
  const navigation = useNavigation();

  // 组件挂载时设置一次固定标题（因标题固定，无需依赖项）
  useEffect(() => {
    navigation.setOptions({
      title: '关于', // 固定标题
      // 可选：其他导航栏样式
      headerTintColor: 'green'
    });
  }, [navigation]); // 仅依赖navigation，组件挂载时执行一次

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>关于页</Text>
      <Link href="/" style={{ marginTop: 20, color: 'blue' }}>
        返回首页
      </Link>
    </View>
  );
}