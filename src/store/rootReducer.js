import {combineReducers} from "redux";
import Heros from "./Heros/reducer";
import Locations from "./Locations/reducer";

export default combineReducers({
  Heros,
  Locations
})