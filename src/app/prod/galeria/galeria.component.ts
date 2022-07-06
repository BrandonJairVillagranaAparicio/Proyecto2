import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogoService } from 'src/app/catalogo.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  filterpost="";
  lista:any[]=[];
  constructor(private router:Router, private catalogoservice: CatalogoService) { 
    this.lista=this.catalogoservice.getLista();
  }
MostrarProd1()
  {
      this.router.navigate(['/Galeria/Prod1']);
  }
  MostrarProd2()
  {
      this.router.navigate(['/Galeria/Prod2']);
  }
  MostrarProd3()
  {
      this.router.navigate(['/Galeria/Prod3']);
  }

  ngOnInit(): void {
  }
  detalle(id:number){
    this.router.navigate(['/Galeria/Prod/',id]);
  }
  
}
