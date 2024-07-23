import {
    FETCH_STUDENTS_REQUEST,
    FETCH_STUDENTS_SUCCESS,
    FETCH_STUDENTS_FAILURE,
} from './action';

const initialState = {
    students: [],
    loading: false,
    error: null,
};

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STUDENTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_STUDENTS_SUCCESS:
            const response = {
                ...state,
                loading: false,
                students: action.payload,
            };
            return response;
        case FETCH_STUDENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default studentReducer;
