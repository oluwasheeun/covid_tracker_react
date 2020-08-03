import React, { useState, useContext, useEffect } from 'react';
import uuid from 'react-uuid';
import PatientInfoContext from '../context/patient/patientInfoContext';

const ContactForm = () => {
  const patientInfoContext = useContext(PatientInfoContext);
  const {
    addPatient,
    current,
    updatePatient,
    clearCurrent,
  } = patientInfoContext;

  useEffect(() => {
    if (current !== null) {
      setPatientDetails(current);
    } else {
      setPatientDetails({
        id: uuid(),
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        VisitedNigeria: true,
      });
    }
  }, [patientInfoContext, current]);

  const [patientDetails, setPatientDetails] = useState({
    id: uuid(),
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    VisitedNigeria: true,
  });
  const { firstName, lastName, email, gender, VisitedNigeria } = patientDetails;

  const onChange = (e) =>
    setPatientDetails({ ...patientDetails, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addPatient(patientDetails);
    } else {
      updatePatient(patientDetails);
    }
    setPatientDetails({
      id: uuid(),
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      VisitedNigeria: true,
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div className='patient_Details'>
      <form onSubmit={onSubmit} id='patient-form'>
        <div className='form-group text-field'>
          <label htmlFor='firstName'>First Name:</label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            value={firstName}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group text-field'>
          <label htmlFor='lastName'>Last Name:</label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            value={lastName}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group text-field'>
          <label htmlFor='email'>Email Address:</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group text-field'>
          <label htmlFor='gender'>Gender:</label>
          <select
            name='gender'
            id='gender'
            value={gender}
            onChange={onChange}
            required
          >
            <option value=''>Select Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </div>
        <div className='form-group'>
          <input
            type='checkbox'
            name='VisitedNigeria'
            id='VisitedNigeria'
            value={VisitedNigeria}
            onChange={() =>
              setPatientDetails({
                ...patientDetails,
                VisitedNigeria: !{ VisitedNigeria },
              })
            }
            defaultChecked={VisitedNigeria}
          />
          <label htmlFor='VisitedNigeria'>
            Recently came in to Nigeria within the last 14 days?
          </label>
        </div>

        <input
          type='submit'
          value={current ? 'Update' : 'Submit'}
          className='btn'
        />
        {current && (
          <button className='btn clear-Fields' onClick={clearAll}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
