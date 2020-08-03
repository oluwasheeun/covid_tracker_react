import React, { useReducer } from 'react';
import uuid from 'react-uuid';
import PatientInfoContext from './patientInfoContext';
import PatientInfoReducer from './patientInfoReducer';
import {
  ADD_PATIENT,
  DELETE_PATIENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PATIENT,
} from '../types';

const PatientInfoState = (props) => {
  const initialState = {
    patients: [
      {
        id: uuid(),
        firstName: 'Ada',
        lastName: 'Lovelace',
        email: 'ada@gmail.com',
        gender: 'Male',
        VisitedNigeria: false,
      },
      {
        id: uuid(),
        firstName: 'Grace',
        lastName: 'Hopper',
        email: 'grace@gmail.com',
        gender: 'Female',
        VisitedNigeria: true,
      },
      {
        id: uuid(),
        firstName: 'Magaret',
        lastName: 'Hamilton',
        email: 'magaret@gmail.com',
        gender: 'Female',
        VisitedNigeria: true,
      },
      {
        id: uuid(),
        firstName: 'Joan',
        lastName: 'Clarke',
        email: 'joan@gmail.com',
        gender: 'Male',
        VisitedNigeria: false,
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(PatientInfoReducer, initialState);

  // Add New Patient
  const addPatient = (patientDetails) => {
    dispatch({
      type: ADD_PATIENT,
      payload: patientDetails,
    });
  };

  // Delete Patient
  const deletePatient = (id) => {
    dispatch({
      type: DELETE_PATIENT,
      payload: id,
    });
  };
  // Update Patient
  const updatePatient = (patientDetails) => {
    dispatch({
      type: UPDATE_PATIENT,
      payload: patientDetails,
    });
  };

  // Set Current Patient
  const setCurrent = (patient) => {
    dispatch({
      type: SET_CURRENT,
      payload: patient,
    });
  };

  // Clear Current
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  return (
    <PatientInfoContext.Provider
      value={{
        patients: state.patients,
        current: state.current,
        addPatient,
        deletePatient,
        updatePatient,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </PatientInfoContext.Provider>
  );
};

export default PatientInfoState;
