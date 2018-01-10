import React, { Component } from 'react';
import ZipStartingField from '../components/ZipStartingField';
import ZipDestinationField from '../components/ZipDestinationField';
import { Button, Form, Row, Col} from 'antd';
import '../App.css';


class ZipForm extends Component {
constructor(props) {
  super(props);
  this.state = {
    errors: {},
    zipStartingCode: '',
    zipDestinationCode: '',
    value: ''
  }
    this.handleStartingChange = this.handleStartingChange.bind(this);
    this.handleDestinationChange = this.handleDestinationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.validateStartCode = this.validateStartCode.bind(this);
    this.validateDestinationCode = this.validateDestinationCode.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    if (
      this.validateStartCode(this.state.zipStartingCode) &&
      this.validateDestinationCode(this.state.zipDestinationCode)
    ) {
      let formPayload = {
        startZip: this.state.zipStartingCode,
        endZip: this.state.zipDestinationCode
      };
      this.props.enterStartingZipCode(formPayload);
      this.props.enterDestinationZipCode(formPayload);
      this.handleClearForm(event);
    }
  }

  handleStartingChange(event) {
    event.preventDefault();
    this.validateStartCode(event.target.value);
    this.setState({zipStartingCode: event.target.value});
  }

  handleDestinationChange(event) {
    event.preventDefault();
    this.validateDestinationCode(event.target.value);
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

  validateStartCode(startCode){
    if (startCode === '' || startCode === '' || startCode.length !== 5) {
      let newError = { zipStartingCode: 'You must enter a valid Zip Code.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.zipStartingCode
      this.setState({ errors: errorState })
      return true
    }
  }
  validateDestinationCode(endCode){
    if (endCode === '' || endCode === '' || endCode.length !== 5) {
      let newError = { zipDestinationCode: 'You must enter a valid Zip Code.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.zipDestinationCode
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
      <Form className="zip-field" onSubmit={this.handleSubmit}>
        <Row>
          <Col span={12}>
            {errorDiv}
            <ZipStartingField
              content={this.state.zipStartingCode}
              label='Starting Point'
              name='start-zip-code'
              handleStartingChange={this.handleStartingChange}
            />
          </Col>
          <Col span={12}>
            {errorDiv}
            <ZipDestinationField
              content={this.state.zipDestinationCode}
              label='Destination'
              name='destination-zip-code'
              handleDestinationChange={this.handleDestinationChange}
            />
          </Col>
        </Row>
        <div className="button-group">
          <Form.Item>
            <Button type="primary" htmlType="submit" value="Submit">Get Distance</Button>
            <Button className="button" id="clear" onClick={this.handleClearForm}>Clear</Button>
          </Form.Item>
        </div>
      </Form>
    )
  }
}

export default ZipForm;
