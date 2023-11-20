import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/css/App.css';
import Home from './pages/Home';
import View from './components/dialog/View';
import Create from './components/form/Create';
import Update from './components/form/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
