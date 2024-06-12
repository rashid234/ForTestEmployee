import { Component } from '@angular/core';
import { EmployeeDataServiceService } from '../services/employee-data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpage',
  templateUrl: './createpage.component.html',
  styleUrl: './createpage.component.css'
})
export class CreatepageComponent {

  model = {
    id: '',
    name: '',
    role: '',
    description: ''
  }
  patternWithoutSpecialChars = "^[^!@#$%^&*(),.?\":{}|<>]*$";
  id: string | null = null;

  constructor(private employeeService: EmployeeDataServiceService, private router: Router) { }

  onSubmit(): void {
    this.employeeService.create(this.model).subscribe((res: any) => {
      alert(res.responseMessage)
      if (res.isValid == true) {
        this.router.navigateByUrl("")
      }
    })
  }
}
