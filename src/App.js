import React from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Patients from './components/Patients';
import './App.css';

import PatientInfoState from './context/patient/PatientInfoState';

function App() {
  return (
    <div className='container'>
      <PatientInfoState>
        <Header />
        <ContactForm />
        <Patients />
      </PatientInfoState>
    </div>
  );
}

export default App;
