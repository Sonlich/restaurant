import { dishCards } from '../../components/dishArray'
import { TYPES } from '../types'

export default function counter(state = dishCards, action) {
  switch (action.type) {
    case TYPES.DISH_TYPES.ADD_DISH:
      const newState = [...state.map((obj) => ({ ...obj }))]
      var ind = newState.findIndex(
        (currentValue) => currentValue.id == action.value.id
      )
      newState[ind] = {
        ...newState[ind],
        id: action.value.id,
        name: action.value.name,
        price: action.value.price,
        count: action.value.count + 1,
        type: action.value.type
      }
      console.log(action.value.count)
      return newState
    case TYPES.DISH_TYPES.DELETE_DISH:
      const newDeleteState = [...state.map((obj) => ({ ...obj }))]
      var ind = newDeleteState.findIndex(
        (currentValue) => currentValue.id == action.value.id
      )
      newDeleteState[ind] = {
        ...newDeleteState[ind],
        id: action.value.id,
        name: action.value.name,
        price: action.value.price,
        count: action.value.count - 1,
        type: action.value.type
      }
      console.log(action.value.count)
      return newDeleteState
    case TYPES.DISH_TYPES.DELETE_THIS_TYPE_DISH:
      const newDeleteTypeState = [...state.map((obj) => ({ ...obj }))]
      var ind = newDeleteTypeState.findIndex(
        (currentValue) => currentValue.id == action.value.id
      )
      newDeleteTypeState[ind] = {
        ...newDeleteTypeState[ind],
        count: 0
      }
      console.log(action.value.count)
      return newDeleteTypeState
    case TYPES.DISH_TYPES.DELETE_ALL_DISH:
      const newDeleteAllState = [...state.map((obj) => ({ ...obj, count: 0 }))]
      return newDeleteAllState
    default:
      return state
  }
}
