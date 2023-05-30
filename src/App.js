import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap'

import Profile from './Components/Profile/Profile'

class App extends React.Component {
  state = {
    Show :false 
  }
  

  handleShow=()=>{
    this.setState({ Show : !this.state.Show})
  }

 

  render() {
    return (
      <div className="App">
          <h1 style={{textAlign:"center"}}>Hello EveryOne </h1>
      <Button  className="btn" variant="success" onClick={this.handleShow}>
      {this.state.Show ? 'Hide' : 'Show'}
      </Button>
     {
        this.state.Show ? <Profile /> : null 
     }
      </div>
       )
   }
   
}




export default App;
