export const ActionTypes = {
  LOGIN: '[Auth] Login',
  LOGIN_SUCCESS: '[Auth] Login Success',
  LOGIN_FAILURE: '[Auth] Login Failure',

  LOGOUT: '[Auth] Logout',
  LOGOUT_SUCCESS: '[Auth] Logout Success',
  LOGOUT_FAILURE: '[Auth] Logout Failure',

  SIGNUP: '[Auth] Signup',
  SIGNUP_SUCCESS: '[Auth] Signup Success',
  SIGNUP_FAILURE: '[Auth] Signup Failure',

  SIGNUP_TRAINER: '[Auth] Signup Trainer',
  SIGNUP_TRAINER_SUCCESS: '[Auth] Signup Trainer Success',
  SIGNUP_TRAINER_FAILURE: '[Auth] Signup Trainer Failure',

  GET_ME: '[Auth] Get Me',
  GET_ME_SUCCESS: '[Auth] Get Me Success',
  GET_ME_FAILURE: '[Auth] Get Me Failure',
} as const;

export type ActionTypes = typeof ActionTypes[keyof typeof ActionTypes];
