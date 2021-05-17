import { ComingSoonComponent } from './coming-soon.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: ComingSoonComponent }];

export const ComingSoonRoutes = RouterModule.forChild(routes);
