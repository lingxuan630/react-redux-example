import * as types from '../constants/ActionTypes'

export function addUser(name) {
  return { type: types.ADD_USER, name }
}