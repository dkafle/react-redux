import React from 'react';

const SubmitButton = props => (
  < input className="task-form-submit"
    type="submit"
    onClick={evt => props.handleSubmit(evt)}
    value="Add" />
);

export default SubmitButton;
