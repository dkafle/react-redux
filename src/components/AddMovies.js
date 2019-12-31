import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
import SubmitButton from './SubmitButton';

const AddMovies = ({
  dispatch,
  state
}) => {
  const submit = () => { }
  return (
    <div>
      <input type="text" value="" placeholder="Enter a movie name" />
      <SubmitButton handleSubmit={submit} />
    </div>
  );
};

export default AddMovies;
