import React from 'react';
import HeaderContainer from './containers/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <HeaderContainer />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
