import React, { Component } from 'react';

const TextField = props => {
  return(
    <div className="zip-code-field">
      <label>{props.label}
        <input
          name={props.name}
          type='text'
          value={props.content}
        />
      </label>
    </div>
  );
}

export default TextField;
