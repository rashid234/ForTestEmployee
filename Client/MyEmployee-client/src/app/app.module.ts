import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { AgGridAngular } from 'ag-grid-angular'; 
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { EmployeeDataServiceService } from './services/employee-data-service.service';
import { DeleteComponent } from './delete/delete.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridAngular,
    HttpClientModule,
    AgGridModule
  ],
  providers: [EmployeeDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
