import "./App.css";
import React,{ useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

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
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("LightMode has been Enable.","success");
    }
  }
  return (
  <>
    <Navbar NavTitle="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alertmsg ={alert} />
    <div className="container my-3">
      <TextForm heading="Enter the Text and Analye below:" mode={mode} showAlert={showAlert} />
    </div>
  </>
  );
}

export default App;