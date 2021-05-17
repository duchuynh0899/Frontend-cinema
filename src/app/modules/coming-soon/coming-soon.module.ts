import { ComingSoonComponent } from './coming-soon.component';
import { SharedModule } from './../../_shared/shared.module';
import { ComingSoonRoutes } from './coming-soon.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, ComingSoonRoutes, SharedModule],
  declarations: [ComingSoonComponent],
})
export class ComingSoonModule {}
