import { combineReducers } from 'redux';
import authReducers from '../features/auth/authSlice';

export default combineReducers({
  auth: authReducers,
});
