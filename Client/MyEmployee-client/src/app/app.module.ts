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
import { UpdatepageComponent } from './updatepage/updatepage.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';
import { CreatepageComponent } from './createpage/createpage.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    DeleteComponent,
    UpdatepageComponent,
    UpdateComponent,
    CreatepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridAngular,
    HttpClientModule,
    AgGridModule,
    FormsModule
  ],
  providers: [EmployeeDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
