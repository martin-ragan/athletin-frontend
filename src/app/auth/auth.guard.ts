import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {debounceTime, map, Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {AuthState} from "../shared/state.types";

export const authGuard = () => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select('auth').pipe(
    debounceTime(200),
    map((authState: AuthState) => {

      console.log('authState', authState);
      if (!authState.currentUser) {
        return router.parseUrl('/log-in')
      }

      return true;
    }));
}
