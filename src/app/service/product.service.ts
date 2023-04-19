import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  listProducts(): Observable<any> {
    return this.http.get(`${environment.api}/listProducts`)
  }

  createProduct(product: any): Observable<any> {
    return this.http.post(`${environment.api}/createProduct`, product)
  }
}
