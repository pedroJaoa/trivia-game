import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Game from './pages/Game';
import Login from './pages/Login/Login';
import Settings from './pages/Settings/Settings';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/settings" render={ (props) => <Settings { ...props } /> } />
      <Route path="/game" component={ Game } />
    </Switch>
  );
}
