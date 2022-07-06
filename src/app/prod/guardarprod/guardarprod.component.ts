import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-guardarprod',
  templateUrl: './guardarprod.component.html',
  styleUrls: ['./guardarprod.component.css']
})
export class GuardarprodComponent implements OnInit {
datos:any;
  constructor() { }

  ngOnInit(): void {this.ValidarDatos();
  }
  ValidarDatos(){
    this.datos= new FormGroup({
      email:new FormControl(""),
      pass: new FormControl("")
    });
  }

}
