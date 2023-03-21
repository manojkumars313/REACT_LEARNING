export const FETCH_CAT_LIST = "FETCH_CAT_LIST";
export const FETCH_CAT_LIST_SUCCESSFULL = "FETCH_CAT_LIST_SUCCESSFULL";
export const FETCH_CAT_LIST_ERROR = "FETCH_CAT_LIST_ERROR";

export const fetchCatListAction = (payload) => {
  console.log("fetchCatListAction");
  return { type: FETCH_CAT_LIST, payload };
};

export const fetchCatListSuccessfullAction = (payload) => {
  return {
    type: FETCH_CAT_LIST_SUCCESSFULL,
    payload,
  };
};

export const fetchCatListFailureAction = (payload) => {
  return {
    type: FETCH_CAT_LIST_ERROR,
    payload,
  };
};
