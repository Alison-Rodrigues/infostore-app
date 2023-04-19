import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ListComponent } from './component/list/list.component';
import { RegisterComponent } from './component/register/register.component';
import { CreateAccountComponent } from './component/create-account/create-account.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    RegisterComponent,
    CreateAccountComponent,
    HomeComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule
  ],
  providers: [
    httpInterceptorProviders,
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'blue' },
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
