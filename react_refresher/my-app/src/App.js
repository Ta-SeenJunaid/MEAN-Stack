import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal'
import './App.css'

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: '1', text: 'Complete the course'},
    {id: '2', text: 'Practice a lot'},
    {id: '3', text: 'Understand properly'}
  ]);

  const addNewGoalHandler = newGoal => {
    //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prevCourseGoals =>  prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
    </div>
  );
};

export default App;