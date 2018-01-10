import React, { Component } from 'react';
import ZipForm from './ZipForm';
import ZipsList from '../components/ZipsList';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      startZips: [],
      endZips: []
    }
    this.enterStartingZipCode=this.enterStartingZipCode.bind(this);
    this.enterDestinationZipCode=this.enterDestinationZipCode.bind(this);
  }

  enterStartingZipCode(start){
    this.setState({startZips: this.state.startZips.concat(start) })
  }
  enterDestinationZipCode(destination){
    this.setState({endZips: this.state.endZips.concat(destination) })
  }

  render() {
    return (
      <div className="App">
        <div className="small-9 small-centered columns">
          <h1 className="App-title">Zip Code Form</h1>
            <div className="App-code-title">
              <ZipForm
                enterStartingZipCode={this.enterStartingZipCode}
                enterDestinationZipCode={this.enterDestinationZipCode}
              />
            </div>
            <div className="App-code-title">
              <ZipsList
                startZips={this.state.startZips}
                endZips={this.state.endZips}
              />
            </div>
        </div>
      </div>
    )
  }
}


export default App;
