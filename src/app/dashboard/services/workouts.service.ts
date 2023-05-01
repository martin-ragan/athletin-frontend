import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Workout} from "../../shared/state.types";
import {map} from "rxjs";


interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}
@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  constructor(private readonly http: HttpClient) { }

  public getWorkouts() {
    return this.http.get<ApiResponse<Workout []>>('http://localhost:3000/user/workouts').pipe(
      map((workouts) => {
        return workouts.data;
      }
    ));
  }

  public createWorkout(workout: Workout) {
    return this.http.post<ApiResponse<Workout>>('http://localhost:3000/trainer/workouts', workout).pipe(
      map((workout) => {
        return workout.data;
      }
    ));
  }

  public updateWorkout(workout: Workout) {
    console.log(workout);
    return this.http.put<ApiResponse<Workout>>(`http://localhost:3000/trainer/workouts/${workout.id}`, workout).pipe(
      map((workout) => {
        return workout.data;
      }
    ));
  }

  public deleteWorkout(workoutId: string) {
    return this.http.delete<ApiResponse<Workout>>(`http://localhost:3000/trainer/workouts/${workoutId}`).pipe(
      map((workout) => {
        return workout.data;
      }
    ));
  }
}
