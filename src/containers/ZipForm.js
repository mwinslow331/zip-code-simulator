import React, { Component } from 'react';
import TextField from '../components/TextField';
import { Button, Form } from 'antd';
import '../App.css';


class ZipForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipStartingCode: '',
      zipDestinationCode: '',
      errors: {},
      value: ''
    }
    this.handleStartingChange=this.handleStartingChange.bind(this);
    this.handleDestinationChange=this.handleDestinationChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleClearForm=this.handleClearForm.bind(this);
    this.validateZipCode=this.validateZipCode.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    if (
      this.validateZipCode(this.state.zipCode)
    ) {
      let formPayload = {
        zip: this.state.zipCode
      };
      this.props.enterZipCode(formPayload);
      this.handleClearForm(event);
    }
  }

  handleStartingChange(event) {
    event.preventDefault();
    this.validateZipCode(event.target.value);
    this.setState({zipStartingCode: event.target.value});
  }

  handleDestinationChange(event) {
    event.preventDefault();
    this.validateZipCode(event.target.value);
    this.setState({zipDestinationCode: event.target.value});
  }

  handleClearForm(event){
    event.preventDefault();
    this.setState({
      errors: {},
      zipStartingCode: '',
      zipDestinationCode: '',
      value: ''
    })
  }

  validateZipCode(code){
    if (code === '' || code === ' ' || code != /^\d{5}$/) {
      let newError = { zipCode: 'You must enter a valid Zip Code.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.zipCode
      this.setState({ errors: errorState })
      return true
    }
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
      <form className="zip-field" onSubmit={this.handleSubmit}>
        {errorDiv}
        <TextField
          content={this.state.zipCode}
          label='Starting Point'
          value={this.state.value}
          name='zip-code'
          handleStartingChange={this.handleStartingChange}
        />

        {errorDiv}
        <TextField
          content={this.state.zipCode}
          label='Destination'
          value={this.state.value}
          name='zip-code'
          handleDestinationChange={this.handleDestinationChange}
        />
        <div className="button-group">
          <Form.Item>
            <Button type="primary">Get Distance</Button>
          <span></span>
            <Button className="button" onClick={this.handleClearForm}>Clear</Button>
          </Form.Item>
        </div>
      </form>
    )
  }
}

export default ZipForm;
