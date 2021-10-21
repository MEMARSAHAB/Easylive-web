import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import SearchPage from './components/rooms/rooms';
import LoginPage from './components/login/login';
import CreateListing from './components/CreateListing';

// import { Message } from "./components/message/Message";
import { ProtectedRoute } from './constant/ProtectedRoute';
import { AuthProvider } from './context/authcontext';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route exact path='/search'>
              <Header />
              <SearchPage />
            </Route>
            <Route exact path='/'>
              <Home />
              <Footer />
            </Route>
            <Route exact path='/login' component={LoginPage} />
            <Route path='/listing' component={CreateListing} />
            {/* <ProtectedRoute path="/message" isPrivate component={Message} /> */}
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
