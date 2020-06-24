import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

// pages
import Home from './pages/Home'
import WeekView from './pages/WeekView'

class App extends Component {

  constructor(props){
    super(props)
    this.state={}
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} render={(props) => <Home {...props}/>}/>
            <Route path="/weekly-view" render={(props) => <WeekView {...props}/>}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;