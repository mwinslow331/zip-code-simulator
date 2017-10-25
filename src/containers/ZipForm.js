import React, { Component } from 'react';
import TextField from '../components/TextField';

class ZipForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
      errors: {}
    }
    this.handleFormSubmit=this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event){

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
          content={this.state.zipCode}
          label='Zip Code'
          name='zipCode'
        />

        <TextField
          content={this.state.zipCode}
          label='Zip Code'
          name='zipCode'
        />
      </form>
    )
  }
}

export default ZipForm;
