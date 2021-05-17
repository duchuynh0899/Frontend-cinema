import { DetailMoviesComponent } from './../../_shared/components/detail-movies/detail-movies.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'movie/:id',
    component: DetailMoviesComponent,
  },
];

export const HomeRoutes = RouterModule.forChild(routes);
