import { HomeComponent } from './home/home.component';
import { ShowtimesAdminComponent } from './showtimes-admin/showtimes-admin.component';
import { ReverstationsAdminComponent } from './reverstations-admin/reverstations-admin.component';
import { MoviesAdminComponent } from './movies-admin/movies-admin.component';
import { CinemasAdminComponent } from './cinemas-admin/cinemas-admin.component';
import { AccountComponent } from './account/account.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutes } from './admin.routing';

@NgModule({
  imports: [CommonModule, AdminRoutes, SharedModule],
  declarations: [
    DashboardAdminComponent,
    AccountComponent,
    CinemasAdminComponent,
    MoviesAdminComponent,
    ReverstationsAdminComponent,
    ShowtimesAdminComponent,
    HomeComponent,
  ],
})
export class AdminModule {}
