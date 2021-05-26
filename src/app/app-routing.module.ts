import { BookingMovieComponent } from './_shared/components/booking-movie/booking-movie.component';
import { CinemasComponent } from './modules/cinemas/cinemas.component';
import { ComingSoonComponent } from './modules/coming-soon/coming-soon.component';
import { HomeGuard } from './_shared/guards/home.guard';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NowShowingComponent } from './modules/now-showing/now-showing.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthorizeGuard } from '@shared/guards/authorize.guard';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        canActivate: [HomeGuard],
        loadChildren: () =>
          import('@modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'now-showing',
        canActivate: [HomeGuard],
        component: NowShowingComponent,
        loadChildren: () =>
          import('@modules/now-showing/now-showing.module').then(
            (m) => m.NowShowingModule
          ),
      },
      {
        path: 'coming-soon',
        canActivate: [HomeGuard],
        component: ComingSoonComponent,
        loadChildren: () =>
          import('@modules/coming-soon/coming-soon.module').then(
            (m) => m.ComingSoonModule
          ),
      },
      {
        path: 'cinemas',
        canActivate: [HomeGuard],
        component: CinemasComponent,
      },
      {
        path: 'dash-board',
        canActivate: [AuthorizeGuard],
        component: DashboardComponent,
      },
      {
        path: 'movie/booking/:id',
        canActivate: [HomeGuard],
        component: BookingMovieComponent,
      },
      // {
      //   path: ':id',
      //   component: DetailMoviesComponent,
      // },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('@modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('@modules/admin/admin.module').then((m) => m.AdminModule),
  },

  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
