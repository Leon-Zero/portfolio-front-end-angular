import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-programing',
  templateUrl: './programing.component.html',
  styleUrls: ['./programing.component.css']
})
export class ProgramingComponent implements OnInit {
  
  programingList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{console.log(data);
      this.programingList=data.skillPrograming;
    });
   
  }

}