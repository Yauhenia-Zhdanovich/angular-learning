import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { ToolboxComponent } from './toolbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ],
  declarations: [
    ToolboxComponent
  ],
  exports: [
    ToolboxComponent
  ],
})

export class ToolboxModule {
}
