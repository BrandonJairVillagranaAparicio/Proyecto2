import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

filterpost='';

Band:boolean=false;
  constructor(private router:Router) { }
Ocultar(){
  console.log(this.Band),
  this.Band=!this.Band
  return this.Band;
}
aparecer(){
  if(this.Band==true){
    this.Band = false;
  }
  else{
    this.Band=true
  }
}


  ngOnInit(): void {
    
  }
  filtrar(){
    this.router.navigate(['/Galeria/Prod/',this.filterpost]);
  }
  

}
