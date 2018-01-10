import React from 'react';

const ZipStartingField = props => {
  return(
    <div className="zip-code-field">
      <label>{props.label}</label>
        <p>
          <input
            onChange={props.handleStartingChange}
            type='text'
            value={props.content}
          />
        </p>
    </div>
  );
}

export default ZipStartingField;
