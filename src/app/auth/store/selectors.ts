import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState, AuthState} from "../../shared/state.types";

const selector = createFeatureSelector<AuthState>('auth');
export const currentUserSelector = createSelector(
  selector,
  (state: AuthState) => state.currentUser
);
