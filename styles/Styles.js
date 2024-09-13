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
    text: '#6800ad',
  },
};

export default StyleSheet.create({
  container: {
    flex: 1,
    padding:5,
    alignItems: 'stretch',  
  },
  segmentedButton: { 
    backgroundColor: theme.colors.background,
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  textInputContainer: {
    flex: 1, 
    justifyContent: 'center',
  },
  textbox: {
    marginBottom: 15,
    backgroundColor: theme.colors.background,
  },
   modalContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#0f0e0e',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  calendar: {
    borderWidth: 1,
    borderColor: theme.colors.text,
  },
  dateButton: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#888', 
    alignItems: 'center',
    backgroundColor: theme.colors.background, 
  },
  dateButtonText: {
    fontSize: 18,
    color: theme.colors.text,
  },
  buttonContainer: {
    marginTop: 20,   
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderBlockColor: theme.colors.text,
    backgroundColor: theme.colors.background,
  },
  IconText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#8b37d0',
  },
  card: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: theme.colors.background,
  },
  containersettings: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: theme.colors.text,
  },
  radioContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: theme.colors.background,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioText: {
    marginLeft: 8,
    fontSize: 16,
    color: theme.colors.text,
    
  },
});
