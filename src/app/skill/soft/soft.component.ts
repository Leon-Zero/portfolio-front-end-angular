import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SkillSoft } from 'src/assets/data/Data';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {
  
  public softList: any = [];
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerSoft().subscribe(respuesta =>{console.log(respuesta);
      this.softList=respuesta;
    }); }
    
  onDelete(){
console.log("Delete Funciona!!")}

}