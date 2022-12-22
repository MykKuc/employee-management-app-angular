import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './interfaces/employee';
import { NewEmployee } from './interfaces/new-employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // URL Addresses of production and local server.
  private productionUrl = 'https://api.employeemanagementapp.com/api/employee';
  private localhostDevUrl = 'http://localhost:8080/api/employee';

  getAllEmployees() {
    return this.http.get(this.productionUrl);
  }

  addNewEmployee(employee: NewEmployee): Observable<NewEmployee> {
    return this.http.post<Employee>(this.productionUrl, employee);
  }
}
