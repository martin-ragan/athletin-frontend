import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Workout} from "../../../shared/state.types";

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss']
})
export class WorkoutFormComponent implements OnInit{

  @Input() workout?: Workout;
  @Input() isCreating: boolean = false;
  @Input() viewOnly: boolean = false;

  @Output() workoutSubmitted = new EventEmitter<Workout>();
  @Output() close = new EventEmitter<void>();

  protected workoutForm!: FormGroup;

  protected get exercises() {
    return this.workoutForm.get('exercises') as FormArray;
  }

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    const name = this.workout?.name ?? '';
    const exercises = this.workout?.exercises ?? [];

    this.workoutForm = this.fb.group({
      name: new FormControl(name, [Validators.required]),
      exercises: this.fb.array(exercises.map(exercise => this.fb.group({
        id: new FormControl(exercise.id),
        name: new FormControl(exercise.name, [Validators.required]),
        sets: new FormControl(exercise.sets, [Validators.required, Validators.min(1)]),
        reps: new FormControl(exercise.reps, [Validators.required, Validators.min(1)])
      })) ?? [])
    });

    if (this.viewOnly) {
      this.workoutForm.disable();
    }
  }

  protected addExercise() {
    this.exercises.push(this.fb.group({
      name: new FormControl('', [Validators.required]),
      sets: new FormControl('', [Validators.required, Validators.min(1)]),
      reps: new FormControl('', [Validators.required, Validators.min(1)])
    }));
  }

  protected removeExercise(index: number) {
    this.exercises.removeAt(index);
  }

  protected closeForm() {
    this.close.emit();
  }

  protected onSubmit() {
    if (this.workoutForm.valid) {
      this.close.emit();
      this.workoutSubmitted.emit({
        ...this.workout,
        ...this.workoutForm.value
      });
      this.workoutForm.reset();
    }
  }
}
