import { StyleSheet } from "react-native";
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#dcf9f9',
    accent: '#03dac4',
    background: '#e0f1f9',
    surface: '#ffffff',
    text: '#a528db',
    
  },
};


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentedButton: { 
    backgroundColor: theme.colors.background,
    flexDirection: 'row', 
    alignItems: 'center',
    margin: 10,
  },
  textbox: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    marginTop: 20,
    marginLeft:20,
    marginRight:20,
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
  }
});
