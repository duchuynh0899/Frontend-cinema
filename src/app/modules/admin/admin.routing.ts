import { HomeComponent } from './home/home.component';
import { MoviesAdminComponent } from './movies-admin/movies-admin.component';
import { AccountComponent } from './account/account.component';
import { ReverstationsAdminComponent } from './reverstations-admin/reverstations-admin.component';
import { ShowtimesAdminComponent } from './showtimes-admin/showtimes-admin.component';
import { CinemasAdminComponent } from './cinemas-admin/cinemas-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { FoundPageComponent } from '@shared/components/found-page/found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardAdminComponent },
  { path: 'movie', component: MoviesAdminComponent },
  ,
  { path: 'cinemas', component: CinemasAdminComponent },
  ,
  { path: 'showtime', component: ShowtimesAdminComponent },
  ,
  { path: 'reverstaitons', component: ReverstationsAdminComponent },
  ,
  { path: 'account', component: AccountComponent },
  { path: '**', component: FoundPageComponent },
];

export const AdminRoutes = RouterModule.forChild(routes);
