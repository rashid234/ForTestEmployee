import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { EmployeeDataServiceService } from '../services/employee-data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  template: `
    <button (click)="delete(value)" class="btn btn-danger m-3" id="deletebutton">Delete</button>
  `,
  styles: `
 #deletebutton{
    font-size: 13px
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
    const userConfirmed = confirm('Are you sure want to delete?');
    if (userConfirmed) {
    this.employeeService.deleteEmployee(id).subscribe((res:any) => {
      if(res?.isValid == true){
        alert("Item deleted successfully")
        window.location.reload()
      }
      else{
        alert(res.responseMessage)
      }
    })
    }
  }
}
