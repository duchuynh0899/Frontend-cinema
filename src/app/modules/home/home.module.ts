import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutes
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
