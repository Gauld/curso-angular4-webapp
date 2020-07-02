import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';//new
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BasicAngularComponent } from './basic-angular/basic-angular.component';
import { ErrorComponent } from './error/error.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ProductoAddComponent } from './producto-add/producto-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicAngularComponent,
    ErrorComponent,
    ProductosComponent,
    ProductosListComponent,
    ProductoAddComponent,
    ProductDetailsComponent,
    ProductoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//new
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
