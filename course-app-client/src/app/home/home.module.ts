import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from '../core/store';
import { HomePageComponent } from './home.component';
import { HeaderModule } from '../shared/header';
import { FooterModule } from '../shared/footer';
import { CourseListModule } from './course-list';
import { ToolboxModule } from './toolbox/toolbox.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    CourseListModule,
    ToolboxModule,
    StoreModule.forFeature('courses', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ],
})

export class HomeComponentModule {
}
