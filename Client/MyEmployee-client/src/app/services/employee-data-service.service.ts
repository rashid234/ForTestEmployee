import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataServiceService {

  baseURL = "https://localhost:7048/"
  constructor(private httpClient: HttpClient) { }
  
  getEmployeeList(){
    return this.httpClient.get(this.baseURL + "readall")
  }

  deleteEmployee(id: any){
    return this.httpClient.delete(this.baseURL + `delete/${id}`)
  }
}
