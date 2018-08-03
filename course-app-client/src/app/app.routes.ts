import { Routes } from '@angular/router';

import { AuthGuardService } from './core/services/auth-guard.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { HomePageComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const courseAppRoutes: Routes = [
  {
    path: 'courses/new',
    component: AddCoursePageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'courses/:id',
    component: AddCoursePageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'courses',
    component: HomePageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
