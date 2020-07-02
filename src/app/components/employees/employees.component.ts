import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];

  constructor(
    private employeesService: EmployeesService,
    private router: Router
  ) {
    this.employees = employeesService.getEmployees();
  }

  showEmployee(id: number) {
    this.router.navigate(['employee', id]);
  }

  ngOnInit(): void {}
}
