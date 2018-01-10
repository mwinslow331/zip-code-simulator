import React from 'react';

const ZipStartingField = props => {
  return(
    <div className="zip-code-field">
      <label>{props.label}
          <input
            onChange={props.handleStartingChange}
            type='text'
            value={props.content}
          />
      </label>
    </div>
  );
}

export default ZipStartingField;
