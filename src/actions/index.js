// export const action = () => async (dispatch) => {
//   const res = api.post();
//   dispatch({
//     type: 'Act',
//     payload: res.data,
//   });
// };
export const sendPhone = (phone) => async (dispatch) => {
  // const res = api
  dispatch({
    type: 'SEND',
    payload: phone,
  });
};