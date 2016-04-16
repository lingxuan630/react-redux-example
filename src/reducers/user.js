import { ADD_USER } from '../constants/ActionTypes'

const initialState = [
  {
    id: 1,
    name: 'lingxuan'
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return [
        {
          id: 1,
          name: 'lingxuan'
        }, 
        ...state
      ]

    default:
      return state
  }
}
