import axios from 'axios';


export const FETCH_STUDENTS_REQUEST = 'FETCH_STUDENTS_REQUEST';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';


export const fetchStudents = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_STUDENTS_REQUEST });
        try {
            const response = await axios.get('https://freetestapi.com/api/v1/students');
            
            dispatch({ type: FETCH_STUDENTS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: FETCH_STUDENTS_FAILURE, error: error.message });
        }
    };
};
