import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/produto';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {

  produtos : Product[] = [];

  xColumns: string[] = ['nome', 'codigoBarras', 'preco', 'criadoEm'];

  constructor(private router:Router, private service: ProdutoService ) { }

  ngOnInit(): void {
    this.service.list().subscribe(products =>{
      this.produtos = products;
    })
  }

  navigateToCreateProduct() : void{
    this.router.navigate(['produto/create'])
  }


}
