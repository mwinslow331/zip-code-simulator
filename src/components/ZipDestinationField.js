import React from 'react';

const ZipDestinationField = props => {
  return(
    <div className="zip-code-field">
      <label>{props.label}</label>
        <p>
          <input
            onChange={props.handleDestinationChange}
            type='text'
            value={props.content}
          />
        </p>
    </div>
  );
}

export default ZipDestinationField;
