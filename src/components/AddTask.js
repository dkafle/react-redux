import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';
import SubmitButton from './SubmitButton';

const AddTask = ({ dispatch, state }) => {
    let inputText, inputExecutor;

    const submitTask = (e) => {
        e.preventDefault();

        if (!inputText.value.trim())
            return;
            
        dispatch(addTask({
            text: inputText.value,
            executor: inputExecutor.value.trim() ? inputExecutor.value : 'All'
        }));

        inputText.value = '';
        inputExecutor.value = '';
    };

    return (
        <div className="form-container">
            <form>
                <input className="task-form-text" placeholder="New task..." ref={node => inputText = node} />
                <input className="task-form-executor" placeholder="Who..." ref={node => inputExecutor = node} />
                <SubmitButton handleSubmit={submitTask}/>
            </form>
        </div>
    );
};

//export default AddTask
// const connectedComponent = connect();
// const AddTask = connectedComponent(AddTask);
// export default AddTask;

export default connect()(AddTask);
