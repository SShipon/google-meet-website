import "./App.css";
import Navbar from "./pages/Shared/Navbar/Navbar";
import Home from "./pages/Home/Home/Home";
import Meet from "./pages/Home/Meet/Meet";
import { 
  Routes,
  Route
} from "react-router-dom"; 

function App() {
  return (
    <div>
      <Navbar/>  
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/home" element={ <Home/>} />
        <Route path="/meet" element={ <Meet/>} />
      </Routes> 
    </div>
  );
}

export default App;
