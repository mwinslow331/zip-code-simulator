import React, { Component } from 'react';
import TextField from '../components/TextField';

class ZipForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
      errors: {}
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleClearForm=this.handleClearForm.bind(this);
  }

  handleSubmit(event){

  }

  handleClearForm(event){
    event.preventDefault();
    this.setState({
      errors: {},
      zipCode: ''
    })
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
          onChange={this.handleSubmit}
        />

        <TextField
          content={this.state.zipCode}
          label='Zip Code'
          name='zipCode'
          onChange={this.handleSubmit}
        />
        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default ZipForm;
