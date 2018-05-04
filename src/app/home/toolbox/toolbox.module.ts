import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ToolboxComponent } from './toolbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
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
