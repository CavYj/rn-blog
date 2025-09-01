import { Tabs } from 'expo-router';
import React from 'react';

// Tabs 布局（底部导航配置）
export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="home/index"
      screenOptions={{
        // 底部导航样式配置
        tabBarActiveTintColor: '#2196F3', // 选中颜色
        tabBarInactiveTintColor: '#999', // 未选中颜色
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      {/* 首页 */}
      <Tabs.Screen
        name="home/index"
        options={{
          title: '首页',
        }}
      />

      {/* 创作 */}
      <Tabs.Screen
        name="create/index"
        options={{
          title: '创作',
        }}
      />

      {/* 日历 */}
      <Tabs.Screen
        name="calendar/index"
        options={{
          title: '日历',
        }}
      />

      {/* 我的 */}
      <Tabs.Screen
        name="mine/index"
        options={{
          title: '我的',
        }}
      />
    </Tabs>
  );
}
    