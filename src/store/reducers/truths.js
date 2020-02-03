import {TRUTHS, USER_TRUTHS} from '../../data/dummy-data';

const initialState = {
  fillerTruths: TRUTHS,
  userTruths: USER_TRUTHS,
  activeTruthId: '',
  activeTruth: [],
  userName: 'Bobo',
};

const truthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      const newName = state.userName === 'BarBar' ? 'BoBo' : 'BarBar';
      return {...state, userName: newName};
    case 'SELECT_TRUTH':
      //   console.log(action.activeTruthKey);
      return {...state, activeTruthId: action.activeTruthKey};
    default:
      return state;
  }
};

export default truthReducer;
