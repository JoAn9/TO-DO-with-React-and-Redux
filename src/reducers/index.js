import {combineReducers} from 'redux';
import user from './userReducer';
import tasks from './tasksReducer';

const rootReducer = combineReducers({
  user,
  tasks,
});

export default rootReducer;