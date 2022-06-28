import api from '../Api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export const sendPhone = (phone) => async (dispatch) => {
  // const res = api
  dispatch({
    type: 'SEND', payload: phone,
  });
};

export const checkExistance = (phone) => async (dispatch) => {
  const res = await api.get(`/api/v1/checkExistance/${phone}`);
  dispatch({
    type: 'CHECK', payload: res.data,
  });
};

export const createNewUser = ({ phone, password, password_confirm }) => async (dispatch) => {
  const res = await api.post(`/api/v1/user`, { phone, password, password_confirm });
  dispatch({
    type: 'CREATE_NEW_USER', payload: res.data,
  });
};

export const login = (phone, password) => async (dispatch) => {
  const res = await api.post(`/api/v1/auth`, { phone, password });
  dispatch({
    type: 'LOGIN', payload: res.data,
  });
};

function loginRequest() {
  return {
    type: 'LOGIN_FETCH',
  };
}

function testLogin(res) {
  return {
    type: 'LOGIN', payload: res,
  };
}

function loginError(err) {
  return {
    type: 'ERROR', payload: err,
  };
}

export const clearError = () => {
  return {
    type: 'CLEAR_ERROR',
  };
};

export const fetchLogin = (phone, password) => {
  return async (dispatch) => {
    dispatch(loginRequest);
    await axios.post(`http://192.168.20.35/api/v1/auth`, { phone, password })
      .then(res => {
        dispatch(testLogin(res.data));
      }, error => {
        dispatch(loginError(error.response.data && error.response.data));
      });
  };
};

// function loginRequest() {
//   return {
//     type: 'LOGIN_FETCH',
//   };
// }
//

//
// function testLogin(res) {
//   return {
//     type: 'LOGIN', payload: res,
//   };
// }

// export const fetchLogin = async (phone) => {
//   return (dispatch) => {
//     dispatch(loginRequest);
//     await axios.post(`${api}/api/v1/checkExistance/${phone}`)
//       .then(res => {
//         dispatch(testLogin(res.data));
//       }, error => {
//         dispatch(loginError(error.response.data && error.response.data));
//       });
//   };
// };