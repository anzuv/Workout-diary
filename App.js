import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import WorkoutlistScreen from './components/List.js';
import SettingsScreen from './components/Settings.js';
import AddworkoutScreen from './components/Workout.js';

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
