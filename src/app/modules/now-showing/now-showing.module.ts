import { NowShowingComponent } from './now-showing.component';
import { SharedModule } from './../../_shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowShowingRoutes } from './now-showing.routing';

@NgModule({
  imports: [CommonModule, NowShowingRoutes, SharedModule],
  declarations: [NowShowingComponent],
})
export class NowShowingModule {}
