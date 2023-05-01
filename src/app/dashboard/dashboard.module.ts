import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes} from "@angular/router";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardClientRequestsPageComponent } from './components/dashboard-client-requests-page/dashboard-client-requests-page.component';
import { DashboardSettingsPageComponent } from './components/dashboard-settings-page/dashboard-settings-page.component';
import { DashboardTrainersPageComponent } from './components/dashboard-trainers-page/dashboard-trainers-page.component';
import { DashboardWorkoutDetailPageComponent } from './components/dashboard-workout-detail-page/dashboard-workout-detail-page.component';
import { DashboardWorkoutsPageComponent } from './components/dashboard-workouts-page/dashboard-workouts-page.component';
import {authGuard} from "../auth/auth.guard";
import { LogoutComponent } from './components/logout/logout.component';
import {ReactiveFormsModule} from "@angular/forms";
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'workouts',
        pathMatch: 'full'
      },
      {
        path: 'workouts',
        component: DashboardWorkoutsPageComponent,
        children: [
          {
            path: ':id',
            component: DashboardWorkoutDetailPageComponent
          },
          {
            path: ':id/history/:historyId',
            component: DashboardWorkoutDetailPageComponent
          }
        ]
      },
      {
        path: 'trainers',
        component: DashboardTrainersPageComponent,
      },
      {
        path: 'settings',
        component: DashboardSettingsPageComponent
      },
      {
        path: 'clients',
        component: DashboardClientRequestsPageComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ],
    canActivate: [authGuard]
  }
];
@NgModule({
  declarations: [
    DashboardComponent,
    DashboardClientRequestsPageComponent,
    DashboardSettingsPageComponent,
    DashboardTrainersPageComponent,
    DashboardWorkoutDetailPageComponent,
    DashboardWorkoutsPageComponent,
    LogoutComponent,
    WorkoutFormComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
