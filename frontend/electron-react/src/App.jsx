import React from 'react'
import { useState } from 'react';
import Axios from 'axios'
import './App.css';





function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addToFiliales = () => {
    Axios.post('http://localhost:3001/insert', {
      filialeTitle: title,
      filialeDescription: description
    })
  }

  return (
    <div className="App">
      <h1>Add Filiale</h1>
      <label >Title:</label>
      <input type="text" placeholder='title' onChange={(event) => { setTitle(event.target.value) }} />
      <label >Description</label>
      <input type="text" placeholder='description' onChange={(event) => { setDescription(event.target.value) }} />
      <button onClick={addToFiliales}>Add to filiales</button>
    </div>
  );
}

export default App;
