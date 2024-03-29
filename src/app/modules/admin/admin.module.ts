import { ModalUsersComponent } from './users/modal-users/modal-users.component';
import { UsersComponent } from './users/users.component';
import { AddShowtimeComponent } from './showtimes-admin/add-showtime/add-showtime.component';
import { CinemasDialogComponent } from './cinemas-admin/cinemas-dialog/cinemas-dialog.component';
import { ModalAddMovieComponent } from './movies-admin/modal-add-movie/modal-add-movie.component';
import { ChartDetailMovieComponent } from './chart-detail-movie/chart-detail-movie.component';
import { ChartBestMovieComponent } from './chart-best-movie/chart-best-movie.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AccountComponent } from './account/account.component';
import { AdminRoutes } from './admin.routing';
import { CinemasAdminComponent } from './cinemas-admin/cinemas-admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { HomeComponent } from './home/home.component';
import { MoviesAdminComponent } from './movies-admin/movies-admin.component';
import { ReverstationsAdminComponent } from './reverstations-admin/reverstations-admin.component';
import { ShowtimesAdminComponent } from './showtimes-admin/showtimes-admin.component';

@NgModule({
  imports: [CommonModule, SharedModule, AdminRoutes],
  declarations: [
    DashboardAdminComponent,
    AccountComponent,
    CinemasAdminComponent,
    MoviesAdminComponent,
    ReverstationsAdminComponent,
    ShowtimesAdminComponent,
    HomeComponent,
    ChartBestMovieComponent,
    ChartDetailMovieComponent,
    ModalAddMovieComponent,
    CinemasDialogComponent,
    AddShowtimeComponent,
    UsersComponent,
    ModalUsersComponent
  ],
})
export class AdminModule {}
