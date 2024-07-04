import React from 'react';
import './App.css';
import Notifications from '../Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
      </div>
      <Footer />
    </>
  );
}

export default App;
