import { Pipe, PipeTransform } from '@angular/core';
import { Iproducto } from './iproducto';

@Pipe({
  name: 'productoFiltrer'
})
export class ProductoFiltrerPipe implements PipeTransform {

  transform(value:Iproducto[], args:string): Iproducto []{
    let filter:string=args? args.toLocaleLowerCase():'';
    return filter ? value.filter((product:Iproducto)=>
    product.Modelo.toLocaleLowerCase().indexOf(filter)!=-1):value;
  }

}
