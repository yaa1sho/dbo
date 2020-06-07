import React from 'react';
import './App.css';
import  './components/content/table/TableStyle.css';
import  './components/header/HeaderStyle.css';
import './components/footer/FooterStyle.css'
import  './components/content/ContentStyle.css'
import {Header} from './components/header/Header';
import {Footer} from './components/footer/Footer';
import {Content} from './components/content/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
