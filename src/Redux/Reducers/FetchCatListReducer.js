import {
  FETCH_CAT_LIST,
  FETCH_CAT_LIST_SUCCESSFULL,
  FETCH_CAT_LIST_ERROR,
} from "../Actions/FetchCatListActions";

const inititalState = {
  catList: [],
  error: false,
  loading: false,
};

const FetchCatListReducer = (state = inititalState, action) => {
  switch (action.type) {
    case FETCH_CAT_LIST: {
      console.log("FETCH_CAT_LIST", action);
      return { ...state, loading: true };
    }
    case FETCH_CAT_LIST_SUCCESSFULL: {
      console.log("FETCH_CAT_LIST_SUCCESSFULL", action);
      return {
        ...state,
        catList: action.payload,
        error: false,
        loading: false,
      };
    }
    case FETCH_CAT_LIST_ERROR: {
      console.log("FETCH_CAT_LIST_ERROR", action);
      return { ...state, error: true, loading: false };
    }
    default: {
      return state;
    }
  }
};

export default FetchCatListReducer;
