import { combineReducers } from 'redux';
import { uhiReducer } from '../../containers/uhi-interface/reducer';
import { errorReducer } from './errorReducer';

export default combineReducers({
    error: errorReducer,
    uhi: uhiReducer
});
