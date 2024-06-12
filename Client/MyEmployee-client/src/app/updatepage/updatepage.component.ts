import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDataServiceService } from '../services/employee-data-service.service';

@Component({
  selector: 'app-updatepage',
  templateUrl: './updatepage.component.html',
  styleUrl: './updatepage.component.css'
})
export class UpdatepageComponent {

  model = {
    id: '',
    name: '',
    role: '',
    description: ''
  }
  patternWithoutSpecialChars = "^[^!@#$%^&*(),.?\":{}|<>]*$";
  id: string | null = null;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeDataServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployeeDetails(this.id).subscribe((res: any) => {
      if (res?.isValid == true) {
        this.model = res.result
      }
      else {
        alert(res.responseMessage)
      }
    })
  }

  onSubmit(): void {
    this.employeeService.update(this.id, this.model).subscribe((res: any) => {
      alert(res.responseMessage)
    })
  }
}
