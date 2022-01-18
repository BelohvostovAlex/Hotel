import React from 'react';
import './scss/App.scss'

import {Home} from './pages/Home'
import {Rooms} from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import {Error} from './pages/Error'
import { Navbar } from './components/Navbar';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/rooms/'} element={<Rooms />} />
        <Route path={'/rooms/:slug'} element={<SingleRoom />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
