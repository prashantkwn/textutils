import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Us from './components/Us';
import Textfrom from './components/Textfrom';
import Alert from './components/Alert';
import {BrowserRouter as Router} from "react-router-dom"
import {
  // createBrowserRouter,
  // RouterProvider,
  Route,
  // Link,
  Routes,
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');// whether dark mode enbled or not
  const [alert,setAlert]=useState(null);// Set alerts

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode("dark");
      document.body.style.backgroundColor='#053B50';
      showAlert("Dark Mode has been Enabled","success");
      document.title="TextUtils - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
      document.title="TextUtils - Light Mode";

    }
  }

  return (
    <>
    <Router>
   <Navbar title="Textutils" aboutText="About textUtils" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
    <Routes>
    <Route exact path="/Us" element={<Us/>} />
    <Route exact path="/" element={<Textfrom showAlert={showAlert} heading="Enter your text below" mode={mode}/>} />
    </Routes>
   </div>
   </Router>
  
  </>
  );
}

export default App;
