import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import * as jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async login(user: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/plain, */*',
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json'
    };
    const result = await this.http.post<any>(`${environment.api}/login`, user, httpOptions ).toPromise();

    if(result) {
      window.localStorage.setItem('token', result);
      return true;
    } else {
      return false;
    }
  }

  create(account: any) {
    return this.http.post(`${environment.api}/createUser`, account).subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

}
