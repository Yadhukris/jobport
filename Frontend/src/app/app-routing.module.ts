import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin/admin.component';
import { AluminiComponent } from './alumini/alumini.component';
import { AlumniHomeComponent } from './alumni-home/alumni-home.component';
import { AppComponent } from './app.component';
import { EmployerHomeComponent } from './employer-home/employer-home.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { EmployerComponent } from './employer/employer.component';
import { FacultyComponent } from './faculty/faculty.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"alumini",component:AluminiComponent},
  {path:"employer",component:EmployerComponent},
  {path:"faculty",component:FacultyComponent},
  {path:"admin",component:AdminComponent},
  {path:"admin/home",component:AdminHomeComponent},
  {path:"employer-login",component:EmployerLoginComponent},
  {path:"employer-login/home",component:EmployerHomeComponent},
  {path:"alumni/home",component:AlumniHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
