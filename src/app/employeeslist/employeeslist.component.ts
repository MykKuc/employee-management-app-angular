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

  names = ['Theresa','Morris','Duane','Taz'];

  employees : Employee[];

  ngOnInit() {
    this.httpService.getAllEmployees().subscribe(
        (response: any) => {this.employees = response; console.log(response)},
        (error) => {console.log(error)}
        )
  }

}
