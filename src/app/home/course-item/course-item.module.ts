import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { CourseItemComponent } from './course-item.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [
    CourseItemComponent
  ],
  exports: [
    CourseItemComponent
  ],
})

export class CourseItemModule {}
