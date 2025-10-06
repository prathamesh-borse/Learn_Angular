import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { ContactComponent } from './contact-component/contact-component';
import { EmployeeDetailComponent } from './employee-detail-component/employee-detail-component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'employee/:id', component: EmployeeDetailComponent},
    {path: '**', component: PageNotFoundComponent}
];
