import { HomeGuard } from './_shared/guards/home.guard';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NowShowingComponent } from './modules/now-showing/now-showing.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from '@shared/guards/authorize.guard';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

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
        component: NowShowingComponent,
        // loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule),
      },
      {
        path: 'dash-board',
        canActivate: [AuthorizeGuard],
        component: DashboardComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('@modules/auth/auth.module').then((m) => m.AuthModule),
  },

  { path: '**', redirectTo: '/404' },
];

export const AppRoutes = RouterModule.forRoot(routes, {
  relativeLinkResolution: 'legacy',
});
