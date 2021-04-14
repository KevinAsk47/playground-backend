import './App.css'
import React, { useState } from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <div className="contenedor">
            <Header />
            <Switch>
              <Route path="/" component={Home} />
              <Redirect to="/" />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>

      )
    }    
  }

export default App
