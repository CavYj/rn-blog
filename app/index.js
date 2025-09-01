import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>欢迎使用我们的应用</Text>
      <Link href="/(tabs)/home" asChild>
        <Button title="开始使用" />
      </Link>
    </View>
  );
}