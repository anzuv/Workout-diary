import React from "react";
import { View, SafeAreaView } from 'react-native';
import { SegmentedButtons, TextInput } from 'react-native-paper';
import Styles from '../styles/Styles.js';

const MyWorkout = () => {
  const [value, setValue] = React.useState('');

  return (
    <SafeAreaView style={Styles.segmentedButton}>
      <SegmentedButtons
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
  
  const TextBox = () => {
    const [distance, setDistance] = React.useState("");
    const [duration, setDuration] = React.useState("");

    return (
      <>
        <TextInput
          style={Styles.textbox}
          label="Distance (km)"
          value={distance}
          onChangeText={setDistance}
          
        />
        <TextInput 
          style={Styles.textbox}
          label="Duration (min)"
          value={duration}
          onChangeText={setDuration}
         
        />
      </>
    );
  };

  return (
    <View>
      <MyWorkout />
      <TextBox />
    </View>
  );
}

export default AddworkoutScreen;
