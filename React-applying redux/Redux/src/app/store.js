import { createStore,applyMiddleware} from 'redux'
import rootReducer  from './rootReducer'
 import { thunk } from 'redux-thunk'
const thunk1 = [thunk];
const store=createStore(rootReducer,applyMiddleware(...thunk1));

export default store