import ProcessType from './Post.types';

export const ProcessStart = () => ({
  type: ProcessType.PROCESS_START,
});

export const ProcessSuccess = data => ({
  type: ProcessType.PROCESS_SUCCESS,
  payload: data,
});

export const ProcessStop = error => ({
  type: ProcessType.PROCESS_STOP,
  payload: error,
});

//REDUX-THUNK

export const dataFetch = name => {
  return dispatch => {
    dispatch(ProcessStart());
    fetch(`https://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        dispatch(ProcessSuccess(json));
        return;
      });
  };
};

// export const dataFetch2 = () => {
//   return dispatch => {
//     dispatch(ProcessStart());
//     fetch('https://api.github.com/users/yash001dev')
//       .then(response => response.json())
//       .then(json => {
//         console.log(json);
//         dispatch(ProcessSuccess(json));
//         return;
//       });
//   };
// };
