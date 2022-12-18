import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NewemployeeComponent } from './newemployee/newemployee.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'main', component: MainpageComponent},
  {path: 'employeelist', component: EmployeeslistComponent},
  {path: 'categorylist', component: CategorylistComponent},
  {path: 'newemployee', component: NewemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
