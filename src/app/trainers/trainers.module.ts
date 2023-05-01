import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { TrainersDetailPageComponent } from './trainers-detail-page/trainers-detail-page.component';
import { TrainersListPageComponent } from './trainers-list-page/trainers-list-page.component';
import { TrainerProfileCardComponent } from './components/trainer-profile-card/trainer-profile-card.component';
import {TrainersService} from "./trainers.service";
import {SharedModule} from "../shared/shared.module";
import { ReviewComponent } from './components/review/review.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: 'trainers',
    component: TrainersListPageComponent
  },
  {
    path: 'trainers/:id',
    component: TrainersDetailPageComponent
  }
];
@NgModule({
  declarations: [
    TrainersDetailPageComponent,
    TrainersListPageComponent,
    TrainerProfileCardComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [TrainersService]
})
export class TrainersModule { }
