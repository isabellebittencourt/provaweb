import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/produto';


@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.css']
})
export class CreateProdutoComponent implements OnInit {

  produto:Product = new Product();
 
  constructor(private router : Router, private service : ProdutoService) { }

  ngOnInit(): void {
  }

  create() : void{
    this.service.create(this.produto).subscribe((produto) =>{
        this.router.navigate(['/']);
    })
  }

}
