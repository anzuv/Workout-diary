import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();


export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);


  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};
