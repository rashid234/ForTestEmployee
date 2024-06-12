import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataServiceService {

  baseURL = "https://localhost:7048/"
  constructor(private httpClient: HttpClient) { }
  
  create(model: any){
    return this.httpClient.post(this.baseURL + "create", model)
  }

  getEmployeeList(){
    return this.httpClient.get(this.baseURL + "readall")
  }

  getEmployeeDetails(id: any){
    return this.httpClient.get(this.baseURL + `readone/${id}`)
  }

  update(id: any, model: any){
    return this.httpClient.put(this.baseURL + `update/${id}`, model)
  }

  deleteEmployee(id: any){
    return this.httpClient.delete(this.baseURL + `delete/${id}`)
  }
}
