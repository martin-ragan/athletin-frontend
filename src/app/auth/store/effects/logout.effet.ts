import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  logoutAction, logoutFailureAction, logoutSuccessAction,
} from "../actions";
import {catchError, map, of,switchMap, tap} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {Injectable} from "@angular/core";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logoutAction),
    switchMap(() => {
      return this.authService.logout().pipe(
        map(() => {
          this.persistanceService.set('accessToken', null);
          return logoutSuccessAction();
        }),
        catchError((err: HttpErrorResponse) => {
          return of(logoutFailureAction());
        })
      )})));


  redirectAfterSubmit$ = createEffect(
    () => this.actions$.pipe(
      ofType(logoutSuccessAction),
      tap(() => {
        this.router.navigateByUrl('/')
      }),
    ),{dispatch: false});

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly persistanceService: PersistanceService,
    private readonly router: Router
  ) {}
}
