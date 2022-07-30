import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Skill } from 'src/assets/data/Data';

@Component({
  selector: 'app-programing',
  templateUrl: './programing.component.html',
  styleUrls: ['./programing.component.css']
})
export class ProgramingComponent implements OnInit {
  
  programingList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerPrograming().subscribe(data =>{console.log(data);
      this.programingList=data;
    });
  }
  onDelete(datosPortfolio_id: Skill){
    this.datosPortfolio.DeletePrograming(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();}) 
 }

}