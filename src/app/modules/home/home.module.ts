import { HomeComingSoonComponent } from './home-coming-soon/home-coming-soon.component';
import { MovieNowShowingComponent } from './movie-now-showing/movie-now-showing.component';
import { NowShowingComponent } from './../now-showing/now-showing.component';
import { SuggetedComponent } from './suggeted/suggeted.component';
import { BannerComponent } from './banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, HomeRoutes],
  declarations: [
    HomeComponent,
    BannerComponent,
    SuggetedComponent,
    MovieNowShowingComponent,
    HomeComingSoonComponent,
  ],
})
export class HomeModule {}
