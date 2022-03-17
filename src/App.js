import React, { Component } from 'react';
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import Home from './Screens/Home';
import NotFound from './Screens/NotFound';
import Wished from './Screens/Wished'
import {DataReducer} from './redux/DataReducer';
import Menu from './Screens/Menu';

const URL = 'http://universities.hipolabs.com';



export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
           university: []
        }
    }

  componentDidMount() {
      fetch(`${URL}/search?country=United+States`)
        .then(res => res.json())
        .then(data => {
          console.log(`data =`, data);
          this.setState({
            university: data
          })
        }).catch(err => console.log(err.message));
  } 

  render() {
    return (
      <Provider store={createStore(DataReducer, this.state.university)} >
          <Router>
              <Menu/>
                <Routes>
                      <Route path={`/`} element={<Home/>} />
                      <Route path={`/home`} element={<Home/>} />
                      <Route path={`/wish`} element={<Wished/>} />
                      <Route path={`/*`} element={<NotFound/>} />
                </Routes>
          </Router>
      </Provider>
    );
  }
}
