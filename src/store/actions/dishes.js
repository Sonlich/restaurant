import { TYPES } from '../types'

const addDish = (value) => {
  return {
    type: TYPES.DISH_TYPES.ADD_DISH,
    value
  }
}

const deleteDish = (value) => {
  return {
    type: TYPES.DISH_TYPES.DELETE_DISH,
    value
  }
}

const deleteThisTypeDish = (value) => {
  return {
    type: TYPES.DISH_TYPES.DELETE_THIS_TYPE_DISH,
    value
  }
}

const deleteAllDish = (value) => {
  return {
    type: TYPES.DISH_TYPES.DELETE_ALL_DISH,
    value
  }
}

export const dishesActions = {
  addDish,
  deleteDish,
  deleteThisTypeDish,
  deleteAllDish
}
