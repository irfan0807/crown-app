import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop.jsx';
import Header from './componets/header-component/Header'



function App() {
  return (

    <div>
      <Header />
      <Switch >
        <Route exact path='/' component={Homepage} />
        <Route path='/shops' component={ShopPage} />
      </Switch>
    </div>





  );
}

export default App;
