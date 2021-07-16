import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { AccountComponent } from './account/account.component';
import { CinemasAdminComponent } from './cinemas-admin/cinemas-admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { MoviesAdminComponent } from './movies-admin/movies-admin.component';
import { ReverstationsAdminComponent } from './reverstations-admin/reverstations-admin.component';
import { ShowtimesAdminComponent } from './showtimes-admin/showtimes-admin.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'superadmin',
      },
    },
    children: [
      { path: 'dashboard', component: DashboardAdminComponent },
      {
        path: 'cinemas',
        component: CinemasAdminComponent,
      },
      { path: 'movie', component: MoviesAdminComponent },
      { path: 'show-time', component: ShowtimesAdminComponent },
      { path: 'revers', component: ReverstationsAdminComponent },
      { path: 'users', component: UsersComponent },
    ],
  },
];

export const AdminRoutes = RouterModule.forChild(routes);
