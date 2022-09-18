import React, { useState } from 'react';

import './NewGoal.css';

const NewGoal = props => {
    const [enteredText, setEnteredText] = useState('');

    const addGoalHandler= event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        setEnteredText('');

        props.onAddGoal(newGoal)

    };

    const textChangeHandeler = event => {
        setEnteredText(event.target.value);
    };

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" value={enteredText} onChange={textChangeHandeler}/>
        <button type="submit">Add new goal</button>
        </form>
    );
};

export default NewGoal;