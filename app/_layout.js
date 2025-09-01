import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
return (
    <Stack
    screenOptions={{
        headerTitleAlign: 'center',
        animation: 'slide_from_right',
    }}
    >
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="about" options={{ title: '关于页' }} />
    </Stack>
);
}