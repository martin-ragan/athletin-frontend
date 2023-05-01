import {Action, createReducer, on} from "@ngrx/store";
import {
  getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction,
  loginAction,
  loginFailureAction,
  loginSuccessAction, logoutAction, logoutFailureAction, logoutSuccessAction,
  registerAction,
  registerFailureAction,
  registerSuccessAction, registerTrainerAction, registerTrainerFailureAction, registerTrainerSuccessAction
} from "./actions";
import {AuthState} from "../../shared/state.types";

const initialState: AuthState = {
  currentUser: null,
}

export const authReducer = createReducer(
  initialState,
  on(registerAction, (state) => ({
    ...state,
    currentUser: null,
  })),
  on(registerSuccessAction, (state, action) => ({
    ...state,
    currentUser: action.currentUser,
  })),
  on(registerFailureAction, (state) => ({
      ...state,
      currentUser: null,
  })),
  on(registerTrainerAction, (state) => ({
    ...state,
    currentUser: null,
  })),
  on(registerTrainerSuccessAction, (state, action) => ({
    ...state,
    currentUser: action.currentUser,
  })),
  on(registerTrainerFailureAction, (state) => ({
    ...state,
    currentUser: null,
  })),
  on(loginAction, (state) => ({
    ...state,
    currentUser: null,
  })),
  on(loginSuccessAction, (state, action) => ({
    ...state,
    currentUser: action.currentUser,
  })),
  on(loginFailureAction, (state) => ({
    ...state,
    currentUser: null,
  })),
  on(getCurrentUserAction, (state) => ({
    ...state,
  })),
  on(getCurrentUserSuccessAction, (state, action) => ({
    ...state,
    currentUser: action.currentUser,
    })),
  on(getCurrentUserFailureAction, (state) => ({
    ...state,
    currentUser: null,
    })),
  on(logoutAction, (state) => ({
    ...state,
  })),
  on(logoutSuccessAction, (state) => ({
    ...state,
    currentUser: null,
    })),
  on(logoutFailureAction, (state) => ({
    ...state,
    })),
);
