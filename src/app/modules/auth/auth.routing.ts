import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
];

export const AuthRoutes = RouterModule.forChild(routes);
