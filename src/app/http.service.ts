import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private productionUrl = 'https://api.employeemanagementapp.com/api/employee';
  private localhostDevUrl = 'http://localhost:8080/api/employee'

  getAllEmployees() {
    return this.http.get(this.productionUrl);
  }

  addNewEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.productionUrl, employee);
  }
}
