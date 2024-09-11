import { combineReducers } from "redux";
import LoginReducer from "./login/reducer";
import TaskReducer from "./tasks/reducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  tasks: TaskReducer
});

export default rootReducer;