import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ListComponent } from './component/list/list.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { CreateAccountComponent } from './component/create-account/create-account.component';
import { AccountGuard } from './security/account.guard';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', component: ListComponent},
      {path: 'createProduct', component: RegisterComponent}
    ],
    canActivate: [AccountGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'createAccount', component: CreateAccountComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
