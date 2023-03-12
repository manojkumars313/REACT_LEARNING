import {
  ADD_NEW_STUDENT,
  DELETE_STUDENT_DETAIL,
  GET_STUDENT_DETAILS,
  UPDATE_STUDENT_DETAIL,
} from "../Actions/StudentsAction";

const inititalState = {
  studentList: [],
  specificStudentDetails: {},
};

const StudentReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_NEW_STUDENT: {
      console.log("ADD_NEW_STUDENT reducer", state, action);
      return { ...state, studentList: [...state.studentList, action.payload] };
    }
    case GET_STUDENT_DETAILS: {
      return { ...state };
    }
    case UPDATE_STUDENT_DETAIL: {
      return { ...state };
    }
    case DELETE_STUDENT_DETAIL: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export default StudentReducer;
