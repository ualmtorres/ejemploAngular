import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employee: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private employeesService: EmployeesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.employee = this.employeesService.getEmployee(params['id']);
    });
  }

  ngOnInit(): void {}
}
