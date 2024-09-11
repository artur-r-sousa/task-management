import { produce } from "immer";

const LoginState = {
  isLoggedIn: false,
  isLoggingIn: false,
  
}

export default function LoginReducer(loginState = LoginState, action) {
  return produce(loginState, (draft) => {
    switch (action.type) {
      case '@login/USER_LOGIN_REQUEST': {
        draft.isLoggedIn = false;
        draft.isLoggingIn = true;
        break;
      }
      case '@login/USER_LOGIN_SUCCESS': {
        draft.isLoggingIn = false;
        draft.isLoggedIn = true;
        break;
      }
      case '@login/USER_LOGIN_FAILURE': {
        draft.isLoggingIn = false;
        draft.isLoggedIn = false;
        break;
      }
      default: {
        return loginState
      }
    }
  })


}
