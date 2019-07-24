import React from 'react';
import Header from './Header/Header.react';
import './App.css';
import Footer from './Footer/Footer.react';
import Content from './Content/Content.react';
import abpos from './abpos.png';
 const request ={
   bloodGroup:'abpos',
   requiredUnit:12,
   location:'chennai',
   imageRef:abpos
 };
function App() {
  return (
    <div className="App">
      <Header/>
      <Content request={request} ></Content>
      <Footer/>
    </div>
  );
}

export default App;
