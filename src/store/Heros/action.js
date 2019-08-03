import {ADD_ACTION} from "./const";

export const add = payload => dispatch => dispatch({type: ADD_ACTION, payload: payload})