import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./Login/Login.component";
import { RouterOutlet } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations :[AppComponent,LoginComponent],
    
    imports:[BrowserModule,AppRoutingModule,RouterOutlet,ReactiveFormsModule],
    bootstrap:[AppComponent]
})

export class AppModule{}