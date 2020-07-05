import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductosService } from '../productos.service';

import { Router } from '@angular/router';
import { GLOBAL } from '../services/global';
@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.scss'],
})
export class ProductoAddComponent implements OnInit {
  public titulo: string;
  public producto: Producto;
  public filesToUpload = [];
  public resultUpload;
  public isEdit: boolean;

  constructor(
    private productoService: ProductosService,
    private router: Router
  ) {
    this.titulo = 'Crear Producto';
    this.producto = new Producto(0, '', '', 0, '');
  }
  ngOnInit(): void {
    console.log('creador productos cargado');
  }
  onSubmit() {
    console.log('1');
    if (this.filesToUpload && this.filesToUpload.length >= 1) {
      this.fileUpLoad();
    }
    console.log('crearP');
    this.crearProducto();
  }

  fileChangeEvent(FileInput: any) {
    console.log('fileCHANGED');
    this.filesToUpload = FileInput.target.files as Array<File>;
    console.log(this.filesToUpload);
  }

  crearProducto() {
    console.log(this.producto);

    this.productoService.addProducto(this.producto).subscribe(
      (result) => {
        console.log(result.code);
        if (result.code === 200) {
          console.log('dos');
          this.router.navigate(['/listaProductos']);
        } else {
          console.log('pepe');
          console.log(result);
        }
      },
      (error) => {
        console.log(error as any);
      }
    );
  }

  fileUpLoad() {
    console.log('fileUp');

    this.productoService
      .makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload)
      .then(
        (result) => {
          console.log('fileup2');
          this.resultUpload = result;
          this.producto.imagen = this.resultUpload.filename;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
