import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import {ProductosService} from '../productos.service';

import{Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public producto:Producto;
  constructor(
    private productoService:ProductosService, private route:ActivatedRoute,private router:Router
  ) { }

  ngOnInit(): void {
    this.getProducto();
  }

  getProducto(){
this.route.params.forEach((params:Params)=>
{
let id=params['id'];
this.productoService.getProducto(id).subscribe(
  response=>{
if(response.code==200){
this.producto=response.data;

}else{
  this.router.navigate(['/productos'])
}
  },error=>{
    console.log(error);
  }
)
});


  }

}
