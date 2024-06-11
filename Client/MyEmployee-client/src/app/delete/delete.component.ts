import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { EmployeeDataServiceService } from '../services/employee-data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  template: `
    <button (click)="delete(value)" id="deletebutton">Delete</button>
  `,
  styles: `
 #deletebutton{
    background-color: red;
    color: white;
    border: 0;
    border-radius: 10px;
    padding: 10px;
    padding-inline: 30px;    
    margin: 10px;
}
  `
})
export class DeleteComponent implements OnInit, ICellRendererAngularComp {

  value: any;
  agInit(params: ICellRendererParams): void {
    this.value = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    return false
  }

  constructor(private employeeService: EmployeeDataServiceService, private router: Router){

  }

  ngOnInit(): void {
    
  }

  delete(id: any){
    this.employeeService.deleteEmployee(id).subscribe((res:any) => {
      if(res?.isValid == true){
        alert("Item deleted successfully")
        window.location.reload()
      }
    })
  }
}
