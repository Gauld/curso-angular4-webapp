import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductosService } from '../productos.service';
import { GLOBAL } from '../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-producto-edit',
  templateUrl: '../producto-add/producto-add.component.html',
  styleUrls: ['./producto-edit.component.scss'],
})
export class ProductoEditComponent implements OnInit {
  public titulo: string;
  public producto: Producto;
  public filesToUpload = [];
  public resultUpload;
  public isEdit: boolean;
  constructor(
    private productoService: ProductosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.titulo = 'Editar Producto';
    this.producto = new Producto(1, '', '', 1, '');
    this.isEdit = true;
  }

  ngOnInit(): void {
    console.log(this.producto);
    this.getProducto();
  }
  getProducto() {
    this.route.params.forEach((params: Params) => {
      const id = params.id;
      this.productoService.getProducto(id).subscribe(
        (response) => {
          if (response.code === 200) {
            this.producto = response.data;
          } else {
            this.router.navigate(['/productos']);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  updateProducto() {
    this.route.params.forEach((params: Params) => {
      const id = params.id;
      console.log(this.producto);
      console.log('edit code');
      this.productoService.editProducto(id, this.producto).subscribe(
        (result) => {
          console.log('edit code');
          console.log(result.code);
          if (result.code === 200) {
            console.log('dos');
            this.router.navigate(['/detallesProducto/' + id]);
          } else {
            console.log('pepe');
            console.log(result);
          }
        },
        (error) => {
          console.log(error as any);
        }
      );
    });
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
  onSubmit() {
    if (this.filesToUpload && this.filesToUpload.length >= 1) {
      this.fileUpLoad();
    }
    this.updateProducto();
  }

  fileChangeEvent(FileInput: any) {
    console.log('fileCHANGED');
    this.filesToUpload = FileInput.target.files as Array<File>;
    console.log(this.filesToUpload);
  }
}
