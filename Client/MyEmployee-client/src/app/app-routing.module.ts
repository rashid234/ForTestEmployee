import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdatepageComponent } from './updatepage/updatepage.component';
import { CreatepageComponent } from './createpage/createpage.component';

const routes: Routes = [
  {path: '', component: EmployeeListComponent},
  {path: 'update/:id', component: UpdatepageComponent},
  {path: 'create', component: CreatepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
