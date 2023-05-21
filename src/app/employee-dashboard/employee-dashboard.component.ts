import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from './employee-dashboard.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  formValue!: FormGroup;
  showAdd!: boolean;
  showUpdate!: boolean;
  // hide = true;
  employeeData!: any;
  employeeModelObject: EmployeeModel = new EmployeeModel();
  constructor(public formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: [''],
    });
    this.getAllEmployee();
  }

  clickAddEmploye() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postEmployeeDetails() {
    this.employeeModelObject.firstName = this.formValue.value.firstName;
    this.employeeModelObject.lastName = this.formValue.value.lastName;
    this.employeeModelObject.email = this.formValue.value.email;
    this.employeeModelObject.mobile = this.formValue.value.mobile;
    this.employeeModelObject.salary = this.formValue.value.salary;

    this.api.postEmploye(this.employeeModelObject).subscribe(
      (res) => {
        console.log(res);
        alert('Employee Added Successfully');
        // this.hide=false;
        let id = document.getElementById('cancel');

        id?.click();
        this.formValue.reset();
        this.getAllEmployee(); //add particular employee
      },

      (err) => {
        alert('Something Went Wrong');
      }
    );
  }
  getAllEmployee() {
    this.api.getEmployee().subscribe((res) => {
      this.employeeData = res;
    });
  }

  deleteEmployee(row: any) {
    console.log('row...', row);
    this.api.deleteEmployee(row.id).subscribe((res) => {
      alert('Employee Deleted');
      this.getAllEmployee();
    });
  }
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.employeeModelObject.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['salary'].setValue(row.salary);
  }

  updateEmployeeDetails() {
    this.employeeModelObject.firstName = this.formValue.value.firstName;
    this.employeeModelObject.lastName = this.formValue.value.lastName;
    this.employeeModelObject.email = this.formValue.value.email;
    this.employeeModelObject.mobile = this.formValue.value.mobile;
    this.employeeModelObject.salary = this.formValue.value.salary;
    // console.log('Update');
    this.api
      .updateEmployee(this.employeeModelObject, this.employeeModelObject.id)
      .subscribe((res) => {
        alert('Updated Successfully');
        let id = document.getElementById('cancel');
        id?.click();
        this.formValue.reset();
        this.getAllEmployee(); //add particular employee
      });
  }
}
