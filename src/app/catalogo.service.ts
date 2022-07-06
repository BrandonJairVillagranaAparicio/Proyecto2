import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

lista:any[]=[
  {
    id:1,
    nombre: 'Producto1',
    precio:'$600',
    imagen:'./assets/png-transparent-logo-emblem-brand-schoology-others-emblem-trademark-logo-thumbnail.png'

  },
  {
    id:2,
    nombre: 'Producto2',
    precio:'$600',
    imagen:'./assets/Schoology-Logo-250x145px.3.jpg'

  
  },
  {
    id:3,
    nombre: 'Producto3',
    precio:'$600',
    imagen:'./assets/websiteQRCode_noFrame.png'
  }
];
  constructor() { 

  }
  getLista()
  {
    return this.lista;
  }
  getProductosId(id:number)
  {
    return this.lista[id];
  }
  getNombre(nombre:string){
    return [nombre];
  }
  getPrecio(precio:string){
    return [precio];
  }
  getImagen(imagen:string){
    return [imagen];
  }

}
