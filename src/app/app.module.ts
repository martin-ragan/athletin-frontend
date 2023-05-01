import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {DashboardModule} from "./dashboard/dashboard.module";
import {PersistanceService} from "./shared/services/persistance.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthinterceptorService} from "./auth/services/authinterceptor.service";
import {TrainersModule} from "./trainers/trainers.module";
import {HomeModule} from "./home/home.module";
import {authReducer} from "./auth/store/reducers";
import {RegisterEffect} from "./auth/store/effects/register.effect";
import {LoginEffect} from "./auth/store/effects/login.effect";
import {LogoutEffect} from "./auth/store/effects/logout.effet";
import {GetCurrentUserEffect} from "./auth/store/effects/getCurrentUser.effect";
import {AuthService} from "./auth/services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    TrainersModule,
    HomeModule,
    StoreModule.forRoot({auth: authReducer}),
    EffectsModule.forRoot([RegisterEffect, LoginEffect, LogoutEffect, GetCurrentUserEffect]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: false}),
  ],
  providers: [
    PersistanceService,
    ...[AuthService, PersistanceService],
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthinterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
