import React from 'react';

import GoalList from './components/GoalList'
import './App.css'

const App = () => {
  const courseGoals = [
    {id: '1', text: 'Complete the course'},
    {id: '2', text: 'Practice a lot'},
    {id: '3', text: 'Understand properly'}
  ];
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals}/>
    </div>
  );
};

export default App;