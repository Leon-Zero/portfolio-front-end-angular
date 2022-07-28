import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-info-academica',
  templateUrl: './info-academica.component.html',
  styleUrls: ['./info-academica.component.css']
})
export class InfoAcademicaComponent implements OnInit {
  
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{console.log(data);
      this.miPortfolio=data.academica;
    });
   
  }

}
