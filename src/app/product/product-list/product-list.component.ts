import { Component } from '@angular/core';
import { Iproducto } from '../iproducto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  imagenWidth:number=50;
  imagenMargin:number=2;
  muestraImg:boolean=true;
  listFiltrer:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }


  productos:Iproducto[]=[
  {
    "productoId":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas familiar",
    "year":"febrero 3 2020",
    "precio":12000,
    "Marca":"NISSAN",
    "Color":"Verde",
    "imagenUrl":"https://st1.uvnimg.com/d4/4a/006304a74db4902c0b4d8d8026c8/chevrolet-corvette-c8-stingray-2020-1280-08.jpg"

  },
  {
    "productoId":2,
    "Modelo":"Tsuru",
    "Descripcion":"4 puertas chicas ",
    "year":"abril 2 2020",
    "precio":15000,
    "Marca":"TOYOTA",
    "Color":"AZUL",
    "imagenUrl":"https://loscoches.com/wp-content/uploads/2021/04/carros-deportivos-potencia.jpg"

  },
  {
    "productoId":3,
    "Modelo":"Chevy",
    "Descripcion":"2 puertas",
    "year":"Diciembre 2015",
    "precio":50000,
    "Marca":"NISSAN",
    "Color":"Rojo",
    "imagenUrl":"https://static.retail.autofact.cl/blog/c_img_740x370.9j7kj78laudtwc5.jpg"
  },
  ]
}
