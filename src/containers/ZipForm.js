import React, { Component } from 'react';
import TextField from '../components/TextField';

class ZipForm extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
    return(
      <form className="zip-field">
        {errorDiv}
        <TextField

        />

        <TextField

        />
      </form>
    )
  }
}

export default ZipForm;
