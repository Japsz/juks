import {initState} from "./initialState";
import {ADD_ACTION, SET_SELECTED} from "./const";

export default function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        list: state.list.concat([action.payload])
      }
    case SET_SELECTED:
      return {
        ...state,
        selected: state.list.filter((item) => {
          return item.name === action.payload
        }).concat([{}])[0]
      }
    default:
      return {...state}
  }
}