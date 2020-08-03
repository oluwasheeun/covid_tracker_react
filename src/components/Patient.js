import React, { useContext } from 'react';
import PatientInfoContext from '../context/patient/patientInfoContext';

const Patient = ({ patient }) => {
  const patientInfoContext = useContext(PatientInfoContext);
  const { setCurrent, deletePatient, clearCurrent } = patientInfoContext;

  const onDelete = () => {
    deletePatient(patient.id);
    clearCurrent();
  };

  return (
    <tr>
      <td>{patient.firstName + ' ' + patient.lastName}</td>
      <td>{patient.email}</td>
      <td>{patient.gender}</td>
      <td>
        <a href='!#'>{patient.VisitedNigeria ? 'Yes' : 'No'}</a>
      </td>
      <td>
        <button className='btn btn-1 edit' onClick={() => setCurrent(patient)}>
          Edit
        </button>
      </td>
      <td>
        <button className='btn btn-1 delete' onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Patient;
