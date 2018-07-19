import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooserComponent } from './chooser.component';
import { FetchAuthorService } from '../../../core/services/fetch-author.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ChooserComponent
  ],
  exports: [
    ChooserComponent
  ],
  providers: [
    FetchAuthorService
  ]
})

export class ChooserModule {}
