import { FoundPageComponent } from './../../_shared/components/found-page/found-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: FoundPageComponent }
];

export const AuthRoutes = RouterModule.forChild(routes);
