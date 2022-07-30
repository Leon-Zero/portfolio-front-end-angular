import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Skill } from 'src/assets/data/Data';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  
  lenguageList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerLengua().subscribe(data =>{console.log(data);
      this.lenguageList=data;
    });
  }
  onDelete(datosPortfolio_id: Skill){
    this.datosPortfolio.DeleteLenguage(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();}) 
 }

}