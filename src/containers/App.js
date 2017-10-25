import React, { Component } from 'react';
import ZipForm from './ZipForm';

class App extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <h1>Zip Code Form</h1>
          <ZipForm/>
        </div>
      </div>
    )
  }
}


export default App;
