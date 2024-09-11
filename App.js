import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Styles from './styles/Styles.js';

export default function App() {
  return (
    <View style={Styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

