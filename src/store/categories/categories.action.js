import {createActions} from '../../utils/reducer/reducer.utils'
import CATEGORIES_ACTION_TYPES from './categories.type'

export const setCategoriesMap = (categoriesMap) => {
    return createActions(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)
}