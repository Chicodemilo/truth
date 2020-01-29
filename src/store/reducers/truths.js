import {TRUTHS, USER_TRUTHS} from '../../data/dummy-data';

const initialState = {
  fillerTruths: TRUTHS,
  userTruths: USER_TRUTHS,
  activeTruth: [],
  userName: 'Bob',
};

const truthReducer = (state = initialState, action) => {
  return state;
};

export default truthReducer;
