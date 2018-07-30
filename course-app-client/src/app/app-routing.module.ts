import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { courseAppRoutes } from './app.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(courseAppRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
