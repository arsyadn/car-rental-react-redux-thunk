import {combineReducers} from 'redux';
import carReducer from './carReducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    carReducer
});

const persistConfig = {
    key: 'root',
    storage
}

export default rootReducer;