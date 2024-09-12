import React from "react";
import { Text, View, SafeAreaView, } from 'react-native';
import { SegmentedButtons, } from 'react-native-paper';
import Styles from '../styles/Styles.js';

const MyWorkout = () => {
  const [value, setValue] = React.useState('');

  return (
    <SafeAreaView style={Styles.segmentedButton}>
      <SegmentedButtons style={Styles.segmentedButton} 
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'Run',
            label: 'Run',
            icon: 'run', 
          },
          {
            value: 'Ski',
            label: 'Ski',
            icon: 'ski', 
          },
          {
            value: 'Swim',
            label: 'Swim',
            icon: 'swim',
          },
        ]}
      />
    </SafeAreaView>

  );
};



function AddworkoutScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text>
        <MyWorkout />  {}
       </Text>
      </View>
    );
  }

  export default AddworkoutScreen;