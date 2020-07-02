import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosListComponent } from './productos-list/productos-list.component';
import {ProductoAddComponent} from "./producto-add/producto-add.component";
import {BasicAngularComponent} from './basic-angular/basic-angular.component'
import {ProductDetailsComponent} from "./product-details/product-details.component"
import {ProductoEditComponent} from "./producto-edit/producto-edit.component"
const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'productos',component:ProductosComponent},//no se usa
  {path: 'listaProductos',component:ProductosListComponent},
  {path: 'crearProducto',component:ProductoAddComponent},
  {path: 'detallesProducto/:id',component:ProductDetailsComponent},
  {path: 'editarProducto/:id',component:ProductoEditComponent},
  {path: 'angular',component:BasicAngularComponent},

  {path: '**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
