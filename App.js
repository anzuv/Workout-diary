import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import Styles from './styles/Styles.js';

function AddworkoutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add workout</Text>
      
    </View>
  );
}

function WorkoutlistScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List of workouts</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name="Add workout" 
        component={AddworkoutScreen}
        options={{tabBarIcon:()=> <FontAwesome5 name="swimmer" size={24} color="black" />}}
        />

        <Tab.Screen 
        name="List of workouts" 
        component={WorkoutlistScreen}
        options={{tabBarIcon:()=> <Feather name="list" size={24} color="black" />}}
        />

        <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{tabBarIcon:()=> <Feather name="settings" size={24} color="black" />}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
