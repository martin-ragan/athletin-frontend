import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {PersistanceService} from "../shared/services/persistance.service";
import { TrainersRegisterComponent } from './components/trainers-register/trainers-register.component';

const routes: Routes = [
  {
    path: 'sign-up',
    component: SingUpComponent
  },
  {
    path: 'trainer-sign-up',
    component: TrainersRegisterComponent
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
];
@NgModule({
  declarations: [
    SingUpComponent,
    LogInComponent,
    TrainersRegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService, PersistanceService]
})
export class AuthModule { }
