import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';

export default combineReducers({
    error: errorReducer
});




/*
f1(cb){
    cb()
}

// console.log()
// f2()

// f3()

f1(f3)--executing

r1- callback()

r2- child of r1 {callback}

*/