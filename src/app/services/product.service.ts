import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44387/api/products/getall';
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {
    //gelen datayı ProdutResponseModele map edeceksin.
    return this.httpClient
      .get<ProductResponseModel>(this.apiUrl)
      
  }
}
