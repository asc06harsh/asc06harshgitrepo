import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/Login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
]

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap:[AppComponent]
 
})

export class AppRoutingModule { }
