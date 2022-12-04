import React, { useState } from "react";
import './App.css';
import { Login } from "./Veteran_pages/Login";
import { Register } from "./Veteran_pages/Register";
import { Home } from "./Veteran_pages/Home";
import { Login_C } from "./community_pages/Login_C";
import { Register_C } from "./community_pages/Register_C";
import { Home_C } from "./community_pages/Home_C";
import {Event_C} from "./community_pages/Event_C"
import { useNavigate ,Route,Routes,Link,Navigate} from "react-router-dom";
import {Start} from "./Start"

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  const user = localStorage.getItem("token");
  return (
    <div className="App">

<Routes>
  <Route path="/" exact element={<Start/>}/>
  <Route path="/com-login" exact element={<Login_C/>}/>
  <Route path="/com-home" exact element={<Home_C/>}/>
  <Route path="/com-register" exact element={<Register_C/>}/>
  <Route path="/com-event" exact element={<Event_C/>}/>
  {user && <Route path="/vet-home" exact element={<Home/>}/>}
  <Route path="/vet-login" exact element={<Login/>}/>
  <Route path="/vet-register" exact element={<Register/>}/>
  <Route path="/vet-home" exact element={<Navigate replace to="/vet-login"/>}/>
</Routes> 
    </div>
  );
}

export default App;