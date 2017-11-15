import React, { Component } from 'react';
import ZipForm from './ZipForm';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      zipCode: []
    }
    this.enterZipCode=this.enterZipCode.bind(this);
  }

  enterZipCode(enter) {
    this.setState({zipCode: this.state.zipCode.concat(enter) })
  }

  render() {
    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <h1 className="form-title">Zip Code Form</h1>
          <ZipForm enterZipCode={this.state.enterZipCode}/>
        </div>
      </div>
    )
  }
}


export default App;
