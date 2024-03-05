import USER_ACTION_TYPES from "./user.type"
import { createActions } from "../../utils/reducer/reducer.utils"
export const setCurrentUser =(user)=>{
    return createActions(USER_ACTION_TYPES.SET_CURRENT_USER, user)
  }
  