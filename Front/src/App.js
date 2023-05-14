import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./Component/LoginForm";

import User from './Component/User/User';
import Register from './Component/Register';
import Contact from './Component/Contact';
import Orders from './Component/User/Orders';
import toast, { Toaster } from 'react-hot-toast';
import UserPrivateRoutes from './Component/UserPrivateRoutes';


function App() {

  return (
    <BrowserRouter>

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 2200,
        }}
      />

      <Routes>

        <Route exact path="/" element={<LoginForm />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Contact' element={<Contact />} />
   
        <Route element={<UserPrivateRoutes />}>
          <Route path='/user' element={<User />} />
          <Route path='/user/orders' element={<Orders />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
