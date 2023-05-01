import { createAction, props } from '@ngrx/store';
import {ActionTypes} from "./action.types";
import {TrainerCreateData, User} from "../../shared/state.types";
export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ username: string; password: string }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: User }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE
);

export const registerAction = createAction(
  ActionTypes.SIGNUP,
  props<{ username: string; email: string, password: string }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.SIGNUP_SUCCESS,
  props<{ currentUser: User }>()
);


export const registerFailureAction = createAction(
  ActionTypes.SIGNUP_FAILURE
);

export const registerTrainerAction = createAction(
  ActionTypes.SIGNUP_TRAINER,
  props<TrainerCreateData>()
);

export const registerTrainerSuccessAction = createAction(
  ActionTypes.SIGNUP_TRAINER_SUCCESS,
  props<{ currentUser: User }>()
);


export const registerTrainerFailureAction = createAction(
  ActionTypes.SIGNUP_TRAINER_FAILURE
);

export const getCurrentUserAction = createAction(
  ActionTypes.GET_ME
);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_ME_SUCCESS,
  props<{ currentUser: User }>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_ME_FAILURE
);

export const logoutAction = createAction(
  ActionTypes.LOGOUT
);

export const logoutSuccessAction = createAction(
  ActionTypes.LOGOUT_SUCCESS
);

export const logoutFailureAction = createAction(
  ActionTypes.LOGOUT_FAILURE
);
