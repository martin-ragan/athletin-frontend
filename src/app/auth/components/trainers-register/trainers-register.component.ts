import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {registerTrainerAction} from "../../store/actions";
import {TrainerCreateData} from "../../../shared/state.types";

@Component({
  selector: 'app-trainers-register',
  templateUrl: './trainers-register.component.html',
  styleUrls: ['./trainers-register.component.scss']
})
export class TrainersRegisterComponent implements OnInit {
  protected registerForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly store: Store) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', Validators.required],
      location: ['', Validators.required],
      password: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  protected async onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      const trainerCreateData: TrainerCreateData = this.registerForm.value;
      this.store.dispatch(registerTrainerAction(trainerCreateData));
    }
  }
}
