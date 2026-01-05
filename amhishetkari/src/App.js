import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginForm from './Components/LoginForm/LoginForm';
import FHome from './Components/Farmer/FHome';
// import Logina from './Components/Log/logina';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Logina/>}/> */}
      <Route path="/" element={<LoginForm/>}/>
      <Route path="/FHome" element={<FHome/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
