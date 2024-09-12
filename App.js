import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, MD2LightTheme, MD2Colors, MD2DarkTheme, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import WorkoutlistScreen from './components/List.js';
import SettingsScreen from './components/Settings.js';
import AddworkoutScreen from './components/Workout.js';
import Styles from './styles/Styles.js';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider theme={MD2LightTheme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name ="Add workout" 
            component={AddworkoutScreen}
            options={{
              tabBarIcon: () => <FontAwesome5 name="swimmer" size={24} color="#8b37d0" />
            }}
          />

          <Tab.Screen
            name="List of workouts" 
            component={WorkoutlistScreen}
            options ={{
              tabBarIcon: () => <Feather name="list" size={24} color="#8b37d0" />
            }}
          />

          <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
              tabBarIcon: () => <Feather name="settings" size={24} color="#8b37d0" />
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}