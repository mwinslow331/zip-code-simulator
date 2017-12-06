import React, { Component } from 'react';

const ZipDestinationField = props => {
  return(
    <div className="zip-code-field">
      <label>{props.label}
        <input
          name={props.name}
          onChange={props.handleDestinationChange}
          type='text'
          value={props.content}
        />
      </label>
    </div>
  );
}

export default ZipDestinationField;
