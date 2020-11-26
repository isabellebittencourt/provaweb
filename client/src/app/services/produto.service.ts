import { Injectable } from '@angular/core';
import { Product } from '../model/produto';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = 'http://localhost:1234/'

  constructor(private http: HttpClient){}
  
  list(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+'produto/listar');
  }
  create(produto : Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl+'produto/cadastrar',produto);
  }
}
