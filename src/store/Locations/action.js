import {ADD_ACTION, SET_SELECTED} from "./const";

export const add = payload => dispatch => dispatch({type: ADD_ACTION, payload: payload})
export const set = payload => dispatch => dispatch({type: SET_SELECTED, payload: payload})