export const CHANGE_NAME = 'CHANGE_NAME';
export const SELECT_TRUTH = 'SELECT_TRUTH';

export const changeName = newName => {
  return async dispatch => {
    //do your fetch and side effects here with await

    const sideEffect = fetch('https://the-one-api.herokuapp.com/v1/book', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then(resp => resp.json())
      .then(data => data);

    const sideData = await sideEffect;
    console.log(sideData.docs[0].name);

    const response = await dispatch({type: CHANGE_NAME, name: newName});
    const resData = await response;
    console.log(resData);
  };
};

export const selectTruth = key => {
  return {type: SELECT_TRUTH, activeTruthKey: key};
};
