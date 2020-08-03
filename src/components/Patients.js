import React, { useContext } from 'react';
import Patient from './Patient';
import PatientInfoContext from '../context/patient/patientInfoContext'

const Patients = () => {
  const patientInfoContext = useContext(PatientInfoContext);
  const { patients } = patientInfoContext;
  
  return (
    <div className='patients'>
      <table className='patients-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Address</th>
            <th>Gender</th>
            <th>Came to Nigeria within the last 14 days</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className='patient-information'>
          {patients.map((patient) => (
            <Patient key={patient.id} patient={patient} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
