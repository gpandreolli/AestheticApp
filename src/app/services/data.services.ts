import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url = 'http://localhost:3010';
    
    constructor(private http: HttpClient) {}    

    getProducts(){
        debugger;
        return this.http.get<Product[]>(`${this.url}/clinic/products`);
    }

    authenticate(data){
      return this.http.post(`${this.url}/accounts/authenticate`,data);
  }
    
        
    
  
}
