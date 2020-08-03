import {
  ADD_PATIENT,
  DELETE_PATIENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PATIENT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_PATIENT:
      return {
        ...state,
        patients: [...state.patients, action.payload],
      };
    case DELETE_PATIENT:
      return {
        ...state,
        patients: state.patients.filter(
          (patient) => patient.id !== action.payload
        ),
      };
    case UPDATE_PATIENT:
      return {
        ...state,
        patients: state.patients.map((patient) =>
          patient.id === action.payload.id ? action.payload : patient
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};
