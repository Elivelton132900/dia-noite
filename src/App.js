import React from "react";
import DiaNoite from './DiaNoite'
import './app.css'

class App extends React.Component {
  state = {time: new Date().toLocaleTimeString()}

  componentDidMount() {
    setInterval( () => {
      this.setState({time: new Date().toLocaleTimeString()})
    }, 1000)
  }

  render() {
    return(
      <div className='container'>
        <DiaNoite hora={this.state.time}/>
      </div>
    )
  }
}

export default App;
