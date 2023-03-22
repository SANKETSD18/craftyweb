// rafc
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Componets/Navbar';
import Home from './Componets/Pages/Home';
import Shoes from './Componets/Pages/Shoes';
import Watches from './Componets/Pages/Watches';
import Laptop from './Componets/Pages/Laptop';



const App = () => {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/Shoes' element={<Shoes />}>  </Route>
          <Route path='/Watches' element={<Watches />}>  </Route>
          <Route path='/Laptop' element={<Laptop />}>  </Route>


      </Routes>
    </BrowserRouter>



  );
}

export default App;

