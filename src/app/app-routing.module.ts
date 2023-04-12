import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ListComponent } from './component/list/list.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'listProducts', component: ListComponent},
  {path: 'registerProduct', component: RegisterComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
