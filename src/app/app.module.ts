import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { EmployeesService } from './services/employees.service';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, NavbarComponent, EmployeesComponent, EmployeeComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES, { useHash: true })],
  providers: [EmployeesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
