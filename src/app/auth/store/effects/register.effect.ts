import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
  registerTrainerAction,
  registerTrainerSuccessAction
} from "../actions";
import {catchError, exhaustMap, map, of, pipe, switchMap, tap} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {Injectable} from "@angular/core";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {TrainerCreateData} from "../../../shared/state.types";

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),
    switchMap(({email, username, password}) => {
      return this.authService.register(email, username, password).pipe(
        map((user) => {
          this.persistanceService.set('accessToken', user.accessToken);
          console.log(user);
          return registerSuccessAction({currentUser: user});
        }),
        catchError((err: HttpErrorResponse) => {
          return of(registerFailureAction());
        })
  )})));

  registerTrainer$ = createEffect(() => this.actions$.pipe(
    ofType(registerTrainerAction),
    switchMap((trainer: TrainerCreateData) => {
      return this.authService.registerTrainer({...trainer}).pipe(
        map((user) => {
          this.persistanceService.set('accessToken', user.accessToken);
          return registerSuccessAction({currentUser: user});
        }),
        catchError((err: HttpErrorResponse) => {
          return of(registerFailureAction());
        })
      )})));


  redirectAfterSubmit$ = createEffect(
    () => this.actions$.pipe(
      ofType(registerSuccessAction, registerTrainerSuccessAction),
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
