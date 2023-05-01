import {Component, OnInit} from '@angular/core';
import {WorkoutsService} from "../../services/workouts.service";
import {User, Workout} from "../../../shared/state.types";
import {Store} from "@ngrx/store";
import {currentUserSelector} from "../../../auth/store/selectors";
import {map} from "rxjs";

@Component({
  selector: 'app-dashboard-workouts-page',
  templateUrl: './dashboard-workouts-page.component.html',
  styleUrls: ['./dashboard-workouts-page.component.scss']
})
export class DashboardWorkoutsPageComponent implements OnInit{

  protected workouts: Workout[] = [];

  protected selectedWorkout: Workout | null = null;

  private isFormOpened = false;

  protected currentUser!: User;
  protected get isOpenForm() {
      return this.isFormOpened;
  }
  constructor(
    private readonly workoutsService: WorkoutsService,
    private readonly store: Store
  ) { }

  ngOnInit(): void {
      this.workoutsService.getWorkouts().subscribe(val => {
          this.workouts = val;
      });

    this.store.select(currentUserSelector).subscribe((user) => {
      if (user) {
        this.currentUser = user;
      }
    });
  }

  protected showCreateWorkoutForm() {
    this.isFormOpened= true;
  }

  protected hideCreateWorkoutForm() {
    this.isFormOpened = false;
  }

  protected hideEditWorkoutForm() {
    this.selectedWorkout = null;
  }

  protected selectWorkout(workout: Workout) {
    this.selectedWorkout = workout;
  }

  protected deleteWorkout(workoutId: string) {
    this.workoutsService.deleteWorkout(workoutId)
      .subscribe(val => {
        this.workouts = this.workouts.filter(w => w.id !== workoutId);
      })
  }
  protected onEditSubmit(workout: Workout) {
    this.workoutsService.updateWorkout(workout)
      .subscribe(val => {
        this.workouts = this.workouts.map(w => w.id === val.id ? val : w);
        this.selectedWorkout = null;
      })
  }
  protected onSubmit(workout: Workout) {
    this.workoutsService.createWorkout(workout)
      .subscribe(val => {
        this.workouts?.push(val);
      })
  }
}
