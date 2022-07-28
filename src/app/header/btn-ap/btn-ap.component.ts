import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-btn-ap',
  templateUrl: './btn-ap.component.html',
  styleUrls: ['./btn-ap.component.css']
})
export class BtnAPComponent implements OnInit {
  
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{console.log(data);
      this.miPortfolio=data.datos;
    });
   
  }

}