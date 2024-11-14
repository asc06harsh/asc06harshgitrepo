import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Dexie from 'dexie';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule]
})
export class AppComponent {
  // Initialize formData object to hold all form values
  formData = {
    fullName: '',
    email: '',
    dob: '',
    phone: null,
    age: 18,
    address: '',
    gender: '',
    course: '',
    terms: false
  };

  employees: any[] = [];
  db: any;
  editMode = false;
  selectedEmployeeId: any = null;

  constructor() {
    // Initialize IndexedDB using Dexie
    this.db = new Dexie('EmployeeDB');
    this.db.version(1).stores({
      employees: '++id,fullName,email,phone,gender,course'
    });
    this.loadEmployees();
  }

  // Load employees from the database
  async loadEmployees() {
    this.employees = await this.db.employees.toArray();
  }

  // Add employee
  async onSubmit(form: any) {
    if (form.valid) {
      if (this.editMode) {
        // Update employee
        await this.db.employees.update(this.selectedEmployeeId, this.formData);
        this.editMode = false;
        this.selectedEmployeeId = null;
      } else {
        // Add new employee
        await this.db.employees.add(this.formData);
      }
      this.loadEmployees();
      this.onReset();
      alert('Employee Registered Successfully!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  // Reset form
  onReset() {
    this.formData = {
      fullName: '',
      email: '',
      dob: '',
      phone: null,
      age: 18,
      address: '',
      gender: '',
      course: '',
      terms: false
    };
    this.editMode = false;
    this.selectedEmployeeId = null;
  }

  // Edit employee
  editEmployee(employee: any) {
    this.formData = { ...employee };
    this.editMode = true;
    this.selectedEmployeeId = employee.id;
  }

  // Update employee (for edit functionality)
  updateEmployee() {
    if (this.editMode) {
      this.onSubmit({ valid: true });
    }
  }

  // Delete employee
  async deleteEmployee(id: number) {
    await this.db.employees.delete(id);
    this.loadEmployees();
    alert('Employee Deleted Successfully!');
  }
}
