import React, { useState } from "react";
import './App.css';
import { Login } from "./Veteran_pages/Login";
import { Register } from "./Veteran_pages/Register";
import { Home } from "./Veteran_pages/Home";
import { Follow} from "./Veteran_pages/Follow";
import { Login_C } from "./community_pages/Login_C";
import { Register_C } from "./community_pages/Register_C";
import { Home_C } from "./community_pages/Home_C";
import {Event_C} from "./community_pages/Event_C"
import {Invites_C} from "./community_pages/Invites_C"
import {Invites_V} from "./Veteran_pages/Invites_V"

import { useNavigate ,Route,Routes,Link,Navigate} from "react-router-dom";
import {Start} from "./Start"

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  const vet_user = localStorage.getItem("vet-token");
  const com_user = localStorage.getItem("com-token");
  return (
    <div className="App">

<Routes>
  {com_user && <Route path="/com-home" exact element={<Home_C/>}/>}
  {com_user && <Route path="/add-event" exact element={<Event_C/>}/>}
  {com_user && <Route path="/check-invites" exact element={<Invites_C/>}/>}
  <Route path="/" exact element={<Start/>}/>
  <Route path="/com-login" exact element={<Login_C/>}/>
  <Route path="/com-home" exact element={<Navigate replace to="/com-login"/>}/>
  <Route path="/com-register" exact element={<Register_C/>}/>
  <Route path="/add-event" exact element={<Navigate replace to="/com-login"/>}/>
  <Route path="/check-invites" exact element={<Navigate replace to="/com-login"/>}/>
  
  {vet_user && <Route path="/vet-home" exact element={<Home/>}/>}
  {vet_user && <Route path="/vet-follow" exact element={<Follow/>}/>}
  {vet_user && <Route path="/vet-invites" exact element={<Invites_V/>}/>}
  <Route path="/vet-login" exact element={<Login/>}/>
  <Route path="/vet-follow" exact element={<Navigate replace to="/vet-login"/>}/>
  <Route path="/vet-register" exact element={<Register/>}/>
  <Route path="/vet-invites" exact element={<Navigate replace to="/vet-login"/>}/>
  <Route path="/vet-home" exact element={<Navigate replace to="/vet-login"/>}/>
</Routes> 
    </div>
  );
}

export default App;