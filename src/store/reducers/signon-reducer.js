import { SIGNON_STATUS } from "../actions/signon-actions";
const initialState = {
  signOn: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNON_STATUS:
      return { ...state, signOn: action.payload };
    default:
      return state;
  }
};
