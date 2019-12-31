import React from 'react';
import Title from './Title';
import AddTask from './AddTask';
import Board from './Board';
import './App.css';
import AddMovies from './AddMovies';

const App = () => (
    <div>
      <Title />
      <AddTask />
      <Board />
      <div>
        <AddMovies />
      </div>
    </div>
);

export default App;
