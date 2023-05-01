import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Store } from "@ngrx/store"
import {loginAction} from "../../store/actions";
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  protected showWarning: boolean = false;
  protected loginForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly store: Store) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    })
  }

  protected async onSubmit() {
    if (this.loginForm.valid) {
      this.showWarning = false;
      this.store.dispatch(loginAction(this.loginForm.value))
    } else {
      this.showWarning = true;
    }
  }
}
