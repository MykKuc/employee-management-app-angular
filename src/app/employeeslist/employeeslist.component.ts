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
    this.getAllEmployees();
    this.httpService.RefreshRequired.subscribe((res) => {
      this.getAllEmployees();
    })
  }

  getAllEmployees() {
    this.httpService.getAllEmployees().subscribe(
        (response: any) => {this.employees = response; console.log(response)},
        (error) => {console.log(error)}
        )
  }

  deleteEmployee(employeeId: number) {
    this.httpService.removeEmployee(employeeId).subscribe(
      (response) => {
        if (response){
          this.httpService.getAllEmployees();
        }
      }
    )
  }

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
