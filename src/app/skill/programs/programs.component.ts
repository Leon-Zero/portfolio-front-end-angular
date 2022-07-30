import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Skill } from 'src/assets/data/Data';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  
  programsList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerProgram().subscribe(data =>{console.log(data);
      this.programsList=data;
    });
  }
  onDelete(datosPortfolio_id: Skill){
    this.datosPortfolio.DeleteProgram(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();}) 
 }
}