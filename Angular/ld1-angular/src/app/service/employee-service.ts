import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Employee} from "../model/employee.model";

import { maxHeaderSize } from "http";
 
@Injectable({
    providedIn:'root'
})
export class EmployeeService{
    baseUrl :  string="http://localhost:3000/employee";
    //performs http requests
    constructor (private http: HttpClient){}
 
getEmployee()
{
    return this.http.get<Employee[]>(this.baseUrl);
}
 
}
