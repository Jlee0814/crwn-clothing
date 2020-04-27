import React from 'react';
import {Route} from'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
const Hatspage=()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop/hats' component={Hatspage}/>
      <Route exact path='/shop/jackets' component={Hatspage}/>
      <Route exact path='/shop/sneakers' component={Hatspage}/>
      <Route exact path='/shop/womens' component={Hatspage}/>
      <Route exact path='/shop/mens' component={Hatspage}/>
    </div>
  );
}

export default App;
