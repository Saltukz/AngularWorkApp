import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,@Inject('apiUrl') private apiUrl :string) { }

  getProducts() : Observable<Product[]>{
    return this.http.get<any>(this.apiUrl).pipe(map(response => response.value))
  }
}
