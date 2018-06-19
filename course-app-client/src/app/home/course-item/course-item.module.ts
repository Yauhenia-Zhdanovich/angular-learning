import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { CourseItemComponent } from './course-item.component';
import { IsFreshDirective } from './is-fresh.directive';
import { TransformDurationPipe } from '../../core/pipes/transform-duration.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [
    CourseItemComponent,
    IsFreshDirective,
    TransformDurationPipe
  ],
  exports: [
    CourseItemComponent
  ],
})

export class CourseItemModule {}
