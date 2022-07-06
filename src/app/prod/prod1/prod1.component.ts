import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from 'src/app/catalogo.service';

@Component({
  selector: 'app-prod1',
  templateUrl: './prod1.component.html',
  styleUrls: ['./prod1.component.css']
})
export class Prod1Component implements OnInit {
id:any;
nombre:any;
precio:any;
imagen:any;
lista:any[]=[];

  constructor(private catalogoservice: CatalogoService, private parametro:ActivatedRoute, private ruta: ActivatedRoute) { 
    this.id=this.parametro.snapshot.paramMap.get('id');
    this.nombre=this.catalogoservice.getNombre('Producto'+this.id);
    this.precio=this.catalogoservice.getPrecio('precio');
    this.imagen=this.catalogoservice.getImagen('imagen');
    this.lista=this.catalogoservice.getLista();
  
    
  }
    ngOnInit(): void {
  }

}
