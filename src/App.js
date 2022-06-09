import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');// whether dark mode is enable or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setalert(null);
    }, 1000);;

  }

 const  toggleMode = ()=>{
   if(mode === 'light'){
   setMode('dark');
   document.body.style.backgroundColor ='	#000000';
   showAlert("Enabled","success")
 }
 else{
   setMode('light')
   document.body.style.backgroundColor ='white';
   showAlert("Disabled","success")
}}
  return (
   <>
  <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
   <Switch>
          <Route path="/about">
          <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm  showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/> {/*Kyu ki text area Bakwas  lgra tha dikhne mai !! */}
          </Route>
        </Switch>
       
 </div> 
 </Router>  
       
  </>
 );
}

export default App;
