import { NowShowingComponent } from './now-showing.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailMoviesComponent } from '@shared/components/detail-movies/detail-movies.component';

const routes: Routes = [
  { path: '', component: NowShowingComponent },
  { path: 'movie/:id', component: DetailMoviesComponent },
];

export const NowShowingRoutes = RouterModule.forChild(routes);
