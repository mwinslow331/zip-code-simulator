import React from 'react';

const ZipDestinationField = props => {
  return(
    <div className="zip-code-field">
      <label>{props.label}
        <input
          onChange={props.handleDestinationChange}
          type='text'
          value={props.content}
        />
      </label>
    </div>
  );
}

export default ZipDestinationField;
