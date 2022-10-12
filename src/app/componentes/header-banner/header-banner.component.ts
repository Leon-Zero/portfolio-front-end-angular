import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatosService } from 'src/app/servicios/portfolio-service/datos.service';
import { Datum } from 'src/assets/data/Data';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.css']
})
export class HeaderBannerComponent implements OnInit {
  
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

