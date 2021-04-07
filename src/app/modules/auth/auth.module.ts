import { SignupComponent } from './pages/signup/signup.component';
import { SharedModule } from './../../_shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutes } from './auth.routing';
import { LoginComponent } from './pages/login/login.component';
import { FeedbackComponent } from './dialogs/feedback/feedback.component';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutes,
    MatCardModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    FeedbackComponent,
    SignupComponent
  ]
})
export class AuthModule { }
