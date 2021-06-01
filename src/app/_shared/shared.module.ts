import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarModule } from 'ngx-avatar';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './material.module';
import { PipesModule } from './pipes/pipes.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxPermissionsModule } from 'ngx-permissions';
@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    ComponentsModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatIconModule,
    TranslateModule,
    AvatarModule,
    SlickCarouselModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    NgxChartsModule,
    NgxPermissionsModule
  ],
})
export class SharedModule {}
