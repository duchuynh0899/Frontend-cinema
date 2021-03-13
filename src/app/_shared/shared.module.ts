import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';
import { MaterialModule } from './material.module';
import { ComponentsModule } from './components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
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
  ]
})
export class SharedModule { }
