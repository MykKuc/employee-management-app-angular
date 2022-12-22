import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from '../interfaces/employee';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent {

  constructor(public httpService: HttpService) {}

  employees : Employee[];

  ngOnInit() {
    this.httpService.getAllEmployees().subscribe(
        (response: any) => {this.employees = response; console.log(response)},
        (error) => {console.log(error)}
        )
  }

  /*getSalaryFontColor() {
    if(this.employees[this.employees]){}
    else if(){}
    else if(){}
    else {

    }
  } */

  getSalaryColor(salary: number) {
    if(salary >= 2000){
      return '#367E18';
    } else if (salary >= 1600) {
      return '#FFE9A0';
    } else if (salary >= 1200){
      return '#F57328';
    } else {
      return '#CC3636';
    }
  }

}
