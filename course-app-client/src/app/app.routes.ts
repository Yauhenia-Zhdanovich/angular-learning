import { Routes } from "@angular/router";

import { LoginPageComponent } from './login-page/login-page.component';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { HomePageComponent } from './home/home.component';
import { NotFoundComponent } from "./not-found/not-found.component";

export const courseAppRoutes: Routes = [
  {
    path: 'courses/add-course',
    component: AddCoursePageComponent
  },
  {
    path: 'courses/:id',
    component: AddCoursePageComponent
  },
  {
    path: 'courses',
    component: HomePageComponent
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
