import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatosService } from 'src/app/servicios/portfolio-service/datos.service';
import { Datum } from 'src/assets/data/Data';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  
  miPortfolio: Datum[]= [];
  suscription: Subscription = new Subscription;

  constructor(private datosPortfolio: DatosService) { }

  ngOnInit(): void {
    this.getData();
    this.suscription = this.datosPortfolio.refresh$.subscribe(()=>{
    this.getData();})
   
  }

  getData(){
    this.datosPortfolio.obtenerData().subscribe(data =>{
      //console.log(data);
      this.miPortfolio=data;
    });
  }

}