import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { EmployeeDataServiceService } from '../services/employee-data-service.service';
import { min } from 'rxjs';
import { DeleteComponent } from '../delete/delete.component';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-employee-list',
  styleUrl: './employee-list.component.css',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

  colDefs: ColDef[] = [
    { field: "Name" , filter: 'agTextColumnFilter'},
    { field: "Role" , filter: 'agTextColumnFilter'},
    { field: "Description" ,filter: 'agTextColumnFilter'},
    { field: "Delete", cellRenderer: DeleteComponent },
    { field: "Update", cellRenderer: UpdateComponent }
  ]

  defaultColDef = {
    flex:1,
    minWidth: 100
  };
  employeeLists: any | null = null

  constructor(private employeeService: EmployeeDataServiceService) {

  }

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe((res: any) => {
      this.employeeLists = []
      if (res?.isValid == true)
        {
          for (let i = 0; i < res.result.length; i++) {
            this.employeeLists.push(
              { Name: res.result[i].name, Role: res.result[i].role, Description: res.result[i].description,
                Delete: res.result[i].id, Update: res.result[i].id}
            )
          }
        }
      else{
        alert(res.responseMessage)
      }
    })

  }
}
