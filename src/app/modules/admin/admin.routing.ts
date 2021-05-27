import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CinemasAdminComponent } from './cinemas-admin/cinemas-admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { MoviesAdminComponent } from './movies-admin/movies-admin.component';
import { ReverstationsAdminComponent } from './reverstations-admin/reverstations-admin.component';
import { ShowtimesAdminComponent } from './showtimes-admin/showtimes-admin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard', component: DashboardAdminComponent },
      {
        path: 'cinemas',
        component: CinemasAdminComponent,
      },
      { path: 'movie', component: MoviesAdminComponent },
      { path: 'show-time', component: ShowtimesAdminComponent },
      { path: 'revers', component: ReverstationsAdminComponent },
      { path: 'my-account', component: AccountComponent },
    ],
  },
];

export const AdminRoutes = RouterModule.forChild(routes);