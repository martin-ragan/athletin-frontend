import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {ApiResponseTrainer, ApiResponseUser, Trainer, TrainerCreateData, User} from "../../shared/state.types";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  register(email: string, username: string, password: string): Observable<User> {
    return this.http.post<ApiResponseUser>('http://localhost:3000/auth/register', {email, username, password})
      .pipe(
        map((response) => {
          return {
            ...response.data.user,
            accessToken: response.data.accessToken
          }
        }));
  }

  registerTrainer(trainer: TrainerCreateData): Observable<Trainer> {
    return this.http.post<ApiResponseTrainer>('http://localhost:3000/auth/register-trainer', {...trainer})
      .pipe((map((response) => {
        return {
          ...response.data.user,
          accessToken: response.data.accessToken
        }
      })));
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<ApiResponseUser>('http://localhost:3000/auth/login', {username: email, password})
      .pipe(
        map((response) => {
          return {
            ...response.data.user,
            accessToken: response.data.accessToken
          }
        }));
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<ApiResponseUser>('http://localhost:3000/user/me')
      .pipe(
        map((response) => {
          return {
            ...response.data.user,
            accessToken: response.data.accessToken
          }
        }));
  }

  logout(): Observable<boolean> {
    return this.http.get<Omit<ApiResponseUser, "user">>('http://localhost:3000/user/logout', {})
      .pipe(map((response) => {
        return response.status === 200;
      }));
  }
}
