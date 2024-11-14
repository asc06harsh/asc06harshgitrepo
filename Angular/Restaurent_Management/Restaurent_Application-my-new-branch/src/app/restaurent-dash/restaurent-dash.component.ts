import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurentData } from './restaurent.model';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css']
})
export class RestaurentDashComponent implements OnInit {
  formValue!: UntypedFormGroup;
  restaurentModelObj: RestaurentData = new RestaurentData();
  allRestaurentData: any;
  filteredRestaurentData: any;
  showAdd!: boolean;
  showBtn!: boolean;
  searchTerm: string = '';

  @ViewChild('closeButton') closeButton!: ElementRef;

  constructor(private formbuilder: UntypedFormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    });
    this.getAllData();
  }

  clickAddResto() {
    this.formValue.reset();
    this.showAdd = true;
    this.showBtn = false;
  }

  addRestaurent() {
    this.restaurentModelObj = { ...this.formValue.value };

    this.api.postRestaurent(this.restaurentModelObj).subscribe(res => {
      alert("Restaurant Added Successfully");
      this.formValue.reset();
      this.closeButton.nativeElement.click(); // Close modal
      this.getAllData();
    }, err => {
      console.log(err);
      alert("Failed to add restaurant!");
    });
  }

  getAllData() {
    this.api.getRestaurent().subscribe(res => {
      this.allRestaurentData = res;
      this.filteredRestaurentData = res;
    }, err => {
      console.log(err);
    });
  }

  deleteResto(id: any) {
    this.api.deleteRestaurant(id).subscribe(res => {
      alert("Restaurant Deleted Successfully");
      this.getAllData();
    }, err => {
      console.log(err);
    });
  }

  onEditResto(data: any) {
    this.showAdd = false;
    this.showBtn = true;
    
    this.restaurentModelObj.id = data.id;
    this.formValue.patchValue(data);
  }

  updateResto() {
    this.restaurentModelObj = { ...this.restaurentModelObj, ...this.formValue.value };

    this.api.updateRestaurant(this.restaurentModelObj.id, this.restaurentModelObj).subscribe(res => {
      alert("Restaurant Updated Successfully");
      this.formValue.reset();
      this.closeButton.nativeElement.click(); // Close modal
      this.getAllData();
    }, err => {
      console.log(err);
    });
  }

  filterData() {
    this.filteredRestaurentData = this.allRestaurentData.filter((restaurant: any) =>
      restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
