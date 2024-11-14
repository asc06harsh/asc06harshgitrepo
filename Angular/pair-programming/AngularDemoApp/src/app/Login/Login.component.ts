import { LiteralPrimitive } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
 constructor(private formBuilder:FormBuilder){}
  ngOnInit(){
    this.loginForm=this.formBuilder.group({
      loginid:["teddy"],
      password:[]
    });
  }
  onSubmit(){ 
    console.log(this.loginForm.value)
  }

}

