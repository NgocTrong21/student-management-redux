import { GET_DETAIL, ADD_DETAIL, DELETE_DETAIL, UPDATE_DETAIL } from "../type";

const initValue = {
  details: [],
  isAdd: false,
  isDelete: false,
  isUpdate: false,
};

const Reducer = (state = initValue, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return {
        ...state,
        details: action.payload,
      };
    case ADD_DETAIL:
      return {
        ...state,
        isAdd: action.payload,
      };
    case UPDATE_DETAIL:
      return {
        ...state,
        isUpdate: action.payload,
      };
    case DELETE_DETAIL:
      return {
        ...state,
        isDelete: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
