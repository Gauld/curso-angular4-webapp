import { Injectable } from '@angular/core';
// import {Http,response,headers,RequestOptiones} from '@angular/http';
// import 'rxjs/add/operator/map';
import { Observable, of } from 'rxjs';
// import { Observable, throwError, Subscription } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Producto } from './models/producto';
import { GLOBAL } from './services/global';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // new

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  public url: string;
  constructor(
    public http: HttpClient // new
  ) {
    this.url = GLOBAL.url;
  }

  getProductos(): Observable<any> {
    // new
    // console.log(this.url+'productos');
    /*
    console.log(this.http.get(`http://localhost/cursoAngular4-backend/index.php/productos`).toPromise());

    this.http.get(`http://localhost/cursoAngular4-backend/index.php/productos`).subscribe( data => {
    console.log("pepe");
    console.log(data)
    return data;
   });
*/
    // console.log(this.url);
    // console.log(this.url+'productos');
    return this.http.get(this.url + 'productos'); // (`http://localhost/cursoAngular4-backend/index.php/productos`);
  }
  addProducto(producto: Producto) {
    const json = JSON.stringify(producto);
    const params = 'json=' + json;
    // let headers=new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    return this.http.post<any>(this.url + '/productos', params, httpOptions);
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    console.log('makefileRequest');
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();
      for (let i = 0; i < files.length; i++) {
        console.log('f1 ' + i);
        console.log(files);
        console.log('f2');
        console.log(files[i]);
        console.log('f3');
        console.log(files[i].name);
        formData.append('upload', files[i], files[i].name);
      }
      console.log(formData);
      console.log(url);

      this.http.post(url, formData).subscribe((val) => {
        console.log(val);
      });
      return false;

      /*
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
      if(xhr.status==200){
        resolve(JSON.parse(xhr.response));
      }
    }
  };

  xhr.open("POST",url,true);
  xhr.send(formData);
  */
    });
  }

  getProducto(id: string): Observable<any> {
    return this.http.get(this.url + 'producto/' + id);
  }

  editProducto(id: number, producto: Producto) {
    const json = JSON.stringify(producto);
    const params = 'json=' + json;
    // let headers=new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    // console.log(params);
    // console.log("params");
    return this.http.post<any>(
      this.url + '/update-producto/' + id,
      params,
      httpOptions
    );
  }
  deleteProducto(id: number): Observable<any> {
    return this.http.get(this.url + '/delete-producto/' + id);
  }
}
