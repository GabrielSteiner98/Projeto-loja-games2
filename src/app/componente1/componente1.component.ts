import { Component, OnInit } from '@angular/core';
import { Produto } from '../Models/produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit{

  public produtos: Produto[] = [];

  constructor(private _produtoService:ProdutoService){}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos():void{
    this._produtoService.getProdutos().subscribe(
      retornaProduto =>{
        this.produtos = retornaProduto.map(
          item => {
            return new Produto(
              item.id,
              item.produto,
              item.descricao,
              item.foto,
              item.preco
            );
          }
        )
      }
    )
  }

}
