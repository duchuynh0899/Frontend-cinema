import { DetailMoviesComponent } from './../../_shared/components/detail-movies/detail-movies.component';
import { ComingSoonComponent } from './coming-soon.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ComingSoonComponent },
  { path: 'movie/:id', component: DetailMoviesComponent },
];

export const ComingSoonRoutes = RouterModule.forChild(routes);
