import "./App.css";
import React,{ useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  const [alert, setAlert] = useState(null);
  const [mode,setMode] = useState("light");
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert('');
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#6c757d';
      showAlert("DarkMode has been Enable.","light");
      // document.title = "Textutils-Home-DarkMode"
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("LightMode has been Enable.","success");
      // document.title = "Textutils-Home"
    }
  }
  
  return (    
  <>    
  <Router>
    <Navbar NavTitle="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alertmsg ={alert} />  
    <Routes>
    <Route exact path="/" element={<TextForm heading="Try TextUlits - Word Counter, Charactor Counter, UpperCase, LowerCase, Remove Extra Spaces:" mode={mode} showAlert={showAlert} />}/>
    <Route exact path="about" element={<About/>}/>
    </Routes>  
  </Router>
  </>
  );
}

export default App;