/*import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,  // Marking the component as standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule]  // Import FormsModule directly here
})
export class AppComponent {
  age: number = 18;
  summaryVisible: boolean = false;
  summary: Array<{ label: string, value: string }> = [];

  onAgeChange(event: any) {
    this.age = event.target.value;
  }

  displaySummary() {
    const form = document.getElementById('registration-form') as HTMLFormElement;

    this.summary = [
      { label: 'Full Name', value: form['full-name'].value },
      { label: 'Email', value: form['email'].value },
      { label: 'Date of Birth', value: form['dob'].value },
      { label: 'Phone Number', value: form['phone'].value },
      { label: 'Age', value: this.age.toString() },
      { label: 'Address', value: form['address'].value },
      { label: 'Gender', value: form['gender']?.value || '' },
      { label: 'Course', value: form['course'].value }
    ].filter(item => item.value);

    this.summaryVisible = this.summary.length > 0;
  }
}*/


import {Component,OnInit} from '@angular/core';
import {Employee} from './model/employee.model';
import { EmployeeService } from './service/employee-service';
import { CommonModule } from '@angular/common';
 
@Component({
  selector:'app-root',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
 
export class AppComponent implements OnInit
{
  title='ld1-amgular';
  employees?:Employee[]=[];
  constructor(private employeeService:EmployeeService){}
 
  ngOnInit(): void {
    console.log("asynchronously retrieving data from the server");
    this.employeeService.getEmployee().subscribe(data=>this.employees=data)   
  }
}
