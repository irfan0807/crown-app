import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop.jsx';



function App() {
  return (

    <div>
      <Switch >
        <Route exact path='/' component={Homepage} />
        <Route path='/shops' component={ShopPage} />
      </Switch>
    </div>





  );
}

export default App;
