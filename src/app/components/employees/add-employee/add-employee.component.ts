import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit{
  addEmployeeRequest: Employee= {
    id: '',
    name:'',
    email:'',
    phone:0,
    salary:0,
    department:''

  };
  constructor(private employeeService: EmployeesService){ }

  ngOnInit(): void {
    
  }

  addEmployee(){
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next:(employee)=>{
        console.log(employee);
      }
    });
  }

}
