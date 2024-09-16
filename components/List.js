import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card,} from 'react-native-paper';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { WorkoutContext } from '../context/WorkoutContext.js';
import { UnitContext } from '../context/UnitContext.js'
import Styles from '../styles/Styles.js'; 

const WorkoutListScreen = () => {
  const { workouts } = useContext(WorkoutContext);
  const { unit } = useContext(UnitContext);

  const totalDistance = (type) => {
    return workouts
      .filter((workout) => workout.type === type)
      .reduce((sum, workout) => sum + (unit === 'mi' ? workout.distance / 1.60934 : workout.distance), 0)
      .toFixed(2); 
  };


  const getIconForType = (type) => {
    switch (type) {
      case 'Run':
        return 'running';
      case 'Ski':
        return 'skiing';
      case 'Swim':
        return 'swimmer';
      default:
        return 'help';
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.iconContainer}>
        <TouchableOpacity style={Styles.iconButton}>
          <FontAwesome5 name="running" size={24} color="#8b37d0" />
          <Text style={Styles.IconText}>{`${totalDistance('Run')} ${unit === 'km' ? 'km' : 'mi'}`}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.iconButton}>
        <FontAwesome5 name="skiing" size={24} color="#8b37d0" />
          <Text style={Styles.IconText}>{`${totalDistance('Ski')} ${unit === 'km' ? 'km' : 'mi'}`}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.iconButton}>
          <FontAwesome5 name="swimmer" size={24} color="#8b37d0" />
          <Text style={Styles.IconText}>{`${totalDistance('Swim')} ${unit === 'km' ? 'km' : 'mi'}`}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={workouts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={Styles.card}>
            <Card.Title
              title={item.date}
              subtitle={`Distance: ${item.distance.toFixed(2)} km, Duration: ${item.duration} min`}
              left={(props) => (
                <FontAwesome5 {...props} name={getIconForType(item.type)} size={24} color="#8b37d0" />
              )}
              titleStyle={{ color: '#8b37d0' }} 
              subtitleStyle={{ color: '#8b37d0' }} 
            />
          </Card>
        )}
      />
    </View>
  );
};

export default WorkoutListScreen;
