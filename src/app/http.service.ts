import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
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

  private _refreshRequired = new Subject<void>();

  get RefreshRequired() {
    return this._refreshRequired;
  }

  getAllEmployees() {
    return this.http.get(this.productionUrl);
  }

  addNewEmployee(employee: NewEmployee): Observable<NewEmployee> {
    return this.http.post<Employee>(this.productionUrl, employee);
  }

  removeEmployee(employeeId: number) {
   return this.http.delete(this.productionUrl + `/${employeeId}`).pipe(
    tap( () => {
      this.RefreshRequired.next();
    })
   )
  }
}
