import {initState} from "./initialState";
import {ADD_ACTION} from "./const";

export default function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        list: state.list.concat([action.payload])
      }
    default:
      return {...state}
  }
}