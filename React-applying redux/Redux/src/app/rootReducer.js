import { combineReducers } from "redux";
import userSlicer from "../Feature/userSlicer";
import contactSlicer from "../Feature/contactSlicer";

 const rootReducer=combineReducers({
    user:userSlicer,
    contact:contactSlicer
}) 
export default rootReducer