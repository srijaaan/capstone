import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListner,
} from "../utils/firebase/firebase.utils";
import { createActions } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const USER_ACTION_TYPES ={
  SET_CURRENT_USER : 'SET_CURRENT_USER'
}

export const userReducer = (state, action) =>{
  const {type, payload} = action
  switch (type){
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return{
        ...state,
        currentUser:payload
      }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

const INITIAL_STATE={
  currentUser:null
}

export const UserProvider = ({ children }) => {
  const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const setCurrentUser =(user)=>{
    dispatch(createActions(USER_ACTION_TYPES.SET_CURRENT_USER, user))
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  // const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
