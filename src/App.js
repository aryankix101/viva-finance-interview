import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import EmploymentInformation from './pages/EmploymentInformation';
import PersonalInformation from './pages/PersonalInformation';
import Form from './pages/Form';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/" element={<Form/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;