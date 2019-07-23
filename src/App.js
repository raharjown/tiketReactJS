import React from 'react';
import './App.css';
import FormLogin from './components/FormLogin';
import { Route } from 'react-router-dom';
import ListTiket from './components/ListTiket';
import FormInputTiket from './components/FormInputTiket';

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <Route exact path="/" component={FormLogin}></Route>
        <Route exact path="/ListTiket" component={ListTiket}></Route>
        <Route exact path="/FormInputTiket" component={FormInputTiket}></Route>

      </div>
    );
  }

}

export default App;
