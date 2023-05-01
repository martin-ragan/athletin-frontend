import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {registerAction} from "../../store/actions";
@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  protected registerForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly store: Store) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  protected async onSubmit() {
    if (this.registerForm.valid) {
      this.store.dispatch(registerAction(this.registerForm.value));
    }
  }
}
