import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.css';
import './App.sass';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Faq from './components/Faq/Faq'
import {Route} from 'react-router-dom'

library.add(fab, fas)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Route exact={true} path="/" component={Home} />
          <Route path="/faq" component={Faq} />
        <Footer/>
      </div>
    );
  }
}

export default App;
