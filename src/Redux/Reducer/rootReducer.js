import {combineReducers} from 'redux';
import CollegeReducer from './collegeReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    "key":"root",
    storage,
    whitelist : ['college']
}

const RootReducer = combineReducers({
    college : CollegeReducer,
})

export default persistReducer(persistConfig,RootReducer);