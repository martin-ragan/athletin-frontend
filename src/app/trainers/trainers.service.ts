import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Review, Trainer} from "../shared/state.types";
import {map, Observable} from "rxjs";

interface ApiTrainersResponse {
  data: Trainer [];
  message: string;
  status: string;
}

interface ApiTrainerResponse {
  data: Trainer;
  message: string;
  status: string
}

interface ApiReviewResponse {
  data: {
    addedReview: Review;
    newAvg: number;
  };
}
@Injectable()
export class TrainersService {

  constructor(private readonly http: HttpClient) { }

  getTrainers(): Observable<Trainer []> {
    return this.http.get<ApiTrainersResponse>('http://localhost:3000/trainer').pipe(
      map((response) => {
        return response.data;
      })
    );
  }

  getTrainerById(id: string): Observable<Trainer> {
    return this.http.get<ApiTrainerResponse>(`http://localhost:3000/trainer/${id}`).pipe(
      map((response) => {
        return response.data;
      })
    );
  }

  sendRequest(id: string): Observable<boolean> {
    return this.http.post<ApiTrainerResponse>(`http://localhost:3000/user/trainers/${id}/subscribe`, {}).pipe(
      map((response) => {
        return response.status === 'success';
      })
    );
  }

  sendReview(id: string, review: { description: string; rating: number;}): Observable<{
    addedReview: Review;
    newAvg: number;
  }> {
    return this.http.post<ApiReviewResponse>(`http://localhost:3000/user/trainers/${id}/review`, {...review}).pipe(
      map((response) => {
        return response.data;
      })
    );
  }
}
