import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private allEmployeesUrl = 'https://api.employeemanagementapp.com/api/employee';

  getAllEmployees() {
    return this.http.get(this.allEmployeesUrl);
  }
}
