import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '../http.service';
import { Employee } from '../interfaces/employee';

@Component({
  selector: 'app-newemployee-form',
  templateUrl: './newemployee-form.component.html',
  styleUrls: ['./newemployee-form.component.css']
})
export class NewemployeeFormComponent {

  constructor(public httpService: HttpService) {}

  newEmployeeName = '';
  newEmployeeSurname = '';

  departments = ['Engineering','Marketing','Administrative'];

  onSubmitNewEmployee(newEmployeeForm: any) {
    console.log(newEmployeeForm);
    this.httpService.addNewEmployee(newEmployeeForm);
  }

}
