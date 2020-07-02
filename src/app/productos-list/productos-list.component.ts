import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../productos.service'
import {Producto} from '../models/producto'
import { promise } from 'protractor';
import{GLOBAL} from '../services/global'
@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.scss'],
  //providers:[ProductosService]
  
})
export class ProductosListComponent implements OnInit {
  public titulo:string;
  public productos : Producto[];
  public productos2 : Producto[];
  public promesa :any;
  public url:string;
  constructor(
    private _productoService:ProductosService//new

  ) {
    this.titulo="lista Productos";
    this.url="http://localhost/cursoAngular4-backend/uploads/";//GLOBAL.url;
   }


  ngOnInit(): void {
    this.getProductos();
  }

  onDeleteProducto(id:number){
    this._productoService.deleteProducto(id).subscribe(
          result => {
              
              if(result.code != 200){
                console.log("dos");
                  console.log(result);
                  
              }else{
                console.log("se borro"); 
                  this.productos = result.data;
                  this.getProductos();
              }
      
          },
          error => {
            console.log("error subs");
              console.log(<any>error);
          }
      );
 
  }
  getProductos(){

//console.log( this._productoService.getProductos());
//POR PROMESAS 

this.promesa = this._productoService.getProductos().toPromise().then((response)=>{
  console.log(response.data);
  if(response.code != 200){
    console.log("dos");
      console.log(response);
  }else{
    console.log("pepe"); 
      this.productos = response.data;
  }

}).catch((error)=>
{console.log("error")})



//POR SUBSCRIBE
/*
this._productoService.getProductos().subscribe(
      result => {
           
          if(result.code != 200){
            console.log("dos");
              console.log(result);
          }else{
            console.log("pepe"); 
              this.productos = result.data;
          }
  
      },
      error => {
        console.log("error subs");
          console.log(<any>error);
      }
  );
*/
  }

}
