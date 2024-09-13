import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { UnitContext } from '../context/UnitContext.js';
import Styles from '../styles/Styles.js'; 

const SettingsScreen = () => {
  const { unit, changeUnit } = useContext(UnitContext);

  const handleUnitChange = (newUnit) => {
    changeUnit(newUnit);
  };

  return (
    <View style={Styles.containersettings}>
      <Text style={Styles.title}>Units:</Text>
      <View style={Styles.radioContainer}>
        <View style={Styles.radioOption}>
          <Text style={Styles.radioText}>Kilometers</Text>
          <RadioButton
            value="km"
            status={unit === 'km' ? 'checked' : 'unchecked'}
            onPress={() => handleUnitChange('km')}
          />
        </View>
        <View style={Styles.radioOption}>
          <Text style={Styles.radioText}>Miles</Text>
          <RadioButton
            value="mi"
            status={unit === 'mi' ? 'checked' : 'unchecked'}
            onPress={() => handleUnitChange('mi')}
          />
        </View>
      </View>
    </View>
  );
};


export default SettingsScreen;
