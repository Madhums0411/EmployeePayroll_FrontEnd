import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { SigninComponent } from './Components/signin/signin.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'signin', component: SigninComponent},
  {path:'login', component:LoginComponent},
  {path:'forgot', component:ForgotpasswordComponent},
  {path:'reset',component:ResetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
