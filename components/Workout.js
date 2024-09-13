import React, { useState, useContext } from "react";
import { View, SafeAreaView,KeyboardAvoidingView,ScrollView,Platform, Pressable, Text,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Modal, SegmentedButtons, TextInput, Button, Provider as PaperProvider, MD2LightTheme } from 'react-native-paper';
import { Calendar } from "react-native-calendars";
import { WorkoutContext } from '../context/WorkoutContext.js';
import Styles from '../styles/Styles.js'; 
import { UnitContext } from "../context/UnitContext.js";

const AddWorkoutScreen = () => {
  const [visible, setVisible] = useState(false); 
  const [date, setDate] = useState(null); 
  const [value, setValue] = useState(''); 
  const [distance, setDistance] = useState(""); 
  const [duration, setDuration] = useState(""); 

  const { addWorkout } = useContext(WorkoutContext);
  const { unit } = useContext(UnitContext);

  function dateSelected(day) {
    setVisible(false); 
    setDate(day.dateString); 
  }

  const handleAddWorkout = () => {
    if (distance <= 0 || duration <= 0) {
      alert("Distance and duration must be positive numbers.");
      return;
    }

    let distanceInKm = parseFloat(distance);
    if (unit === 'mi') {
      distanceInKm = distanceInKm * 1.60934;
    }

    const newWorkout = {
      type: value,
      distance: parseFloat(distance),
      duration: parseFloat(duration),
      date: date,
    };

    addWorkout(newWorkout);
    alert("Workout added!");
    setDistance("");
    setDuration("");
    setDate(null);
    setValue('');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView 
        style={Styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={Styles.scrollView}>
          <SafeAreaView style={Styles.segmentedButton}>
            <SegmentedButtons
              value={value}
              onValueChange={setValue}
              buttons={[
                { value: 'Run', label: 'Run', icon: 'run' },
                { value: 'Ski', label: 'Ski', icon: 'ski' },
                { value: 'Swim', label: 'Swim', icon: 'swim' },
              ]}
            />
          </SafeAreaView>

          <PaperProvider theme={MD2LightTheme}>
            <View style={Styles.textInputContainer}>
              <TextInput
                style={Styles.textbox} 
                label={`Distance (${unit === 'km' ? 'km' : 'mi'})`}
                value={distance}
                onChangeText={setDistance}
                keyboardType="numeric" 
                mode="outlined" 
              />

              <TextInput
                style={Styles.textbox}
                label="Duration (min)"
                value={duration}
                onChangeText={setDuration}
                keyboardType="numeric" 
                mode="outlined"
              />
            </View>
          </PaperProvider>

          <Pressable onPress={() => setVisible(true)} style={Styles.dateButton}>
            <Text style={Styles.dateButtonText}>{date ? date : 'Select date'}</Text>
          </Pressable>

          <Modal visible={visible} transparent={true} onDismiss={() => setVisible(false)}>
            <View style={Styles.modalContainer}>
              <Calendar style={Styles.calendar} onDayPress={dateSelected} hideExtraDays={true} />
            </View>
          </Modal>

          <View style={Styles.buttonContainer}>
            <Button mode="contained" onPress={handleAddWorkout}>
              Add Workout
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default AddWorkoutScreen;
