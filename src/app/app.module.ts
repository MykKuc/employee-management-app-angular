import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import { EmployeecardComponent } from './employeecard/employeecard.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainpageComponent,
    EmployeeslistComponent,
    CategorylistComponent,
    NewemployeeComponent,
    EmployeecardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
