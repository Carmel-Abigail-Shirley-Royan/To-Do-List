import React, { useState } from 'react';
import './App.css';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue('');
    }
  };
  const Delete = (index) => {
    const arr = [];
    for (let i = 0; i < tasks.length; i++) {
      if (i !== index) {
        arr.push(tasks[i]);
      }
    }
    setTasks(arr);
  }
  const Display = ({ task, index }) => {
    return (<div ><h3 className="task-box">{task} </h3>
      <button onClick={() => Delete(index)} className='del text2'>Delete</button>
    </div>);
  };

  return (
    <div className='App'>
      <h1>To Do List</h1>
      <div className='text'>
        <input
          type='text'
          id="ans"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='my-button' onClick={addTask}>Add Task</button>
      </div>
      <div className='text2'>
        {tasks.map((task, index) => (
          <Display key={index} task={task} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
