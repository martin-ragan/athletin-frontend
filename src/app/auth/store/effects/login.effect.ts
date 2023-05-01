import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  loginAction, loginFailureAction,
  loginSuccessAction,
} from "../actions";
import {catchError, map, of,switchMap, tap} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {Injectable} from "@angular/core";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class LoginEffect {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    switchMap(({username, password}) => {
      return this.authService.login(username, password).pipe(
        map((user) => {
          this.persistanceService.set('accessToken', user.accessToken);
          console.log(user);
          return loginSuccessAction({currentUser: user});
        }),
        catchError((err: HttpErrorResponse) => {
          return of(loginFailureAction());
        })
      )})));


  redirectAfterSubmit$ = createEffect(
    () => this.actions$.pipe(
      ofType(loginSuccessAction),
      tap(() => {
        this.router.navigateByUrl('/dashboard')
      }),
    ),{dispatch: false});

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly persistanceService: PersistanceService,
    private readonly router: Router
  ) {}
}
