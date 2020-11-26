import { ListProdutoComponent } from './view/produto/list-produto/list-produto.component';
import { CreateProdutoComponent } from './view/produto/create-produto/create-produto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component:ListProdutoComponent
  },{
    path:'produto/create',
    component:CreateProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
