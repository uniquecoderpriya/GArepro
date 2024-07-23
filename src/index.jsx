import { combineReducers } from 'redux';
import studentReducer from './reducers';
const rootReducer = combineReducers({
    students: studentReducer,
});
console.log('3rd call')

export default rootReducer;
