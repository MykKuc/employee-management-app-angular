import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent {

  constructor(public httpService: HttpService) {}

  employees : any;

  ngOnInit() {
    this.httpService.getAllEmployees().subscribe(
        (response) => {console.log(response);}
    )
  }
  

}
