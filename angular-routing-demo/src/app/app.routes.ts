import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { EmployeeDetailComponent } from './employee-detail-component/employee-detail-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'employee/:id', component: EmployeeDetailComponent},
  {path: '**', component: NotFoundComponent}, // this is an wildcard route
  // { path: '**', redirectTo: '' }, // this is an wildcard route with redirectTo
];
