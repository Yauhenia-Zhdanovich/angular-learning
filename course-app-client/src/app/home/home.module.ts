import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
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
    ToolboxModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
})

export class HomeComponentModule {
}
