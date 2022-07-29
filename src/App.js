import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
  <>
    <Navbar NavTitle="TextUtils"/>
    {/* <Navbar /> */}
    <div className="container my-3">
      <TextForm heading="Enter the Text and Analye below:"/>
    </div>
  </>
  );
}

export default App;