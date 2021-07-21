import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AluminiComponent } from './alumini/alumini.component';
import { EmployerComponent } from './employer/employer.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AdminComponent } from './admin/admin.component';
import { AlljobsComponent } from './alljobs/alljobs.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AluminiComponent,
    EmployerComponent,
    FacultyComponent,
    AdminComponent,
    AlljobsComponent,
    JobpostComponent,
    NavbarComponent,
    AboutusComponent,
    IndexComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }