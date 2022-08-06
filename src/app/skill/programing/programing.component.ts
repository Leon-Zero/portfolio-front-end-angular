import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Skill } from 'src/assets/data/Data';

@Component({
  selector: 'app-programing',
  templateUrl: './programing.component.html',
  styleUrls: ['./programing.component.css']
})
export class ProgramingComponent implements OnInit {

  suscription: Subscription = new Subscription;
  programingList:any;
  datos:Object=[]
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.getData();
    this.suscription = this.datosPortfolio.refresh$.subscribe(()=>{
    this.getData();
    })
  } 
  getData(){
    this.datosPortfolio.obtenerPrograming().subscribe(data =>{console.log(data);
      this.programingList=data;
    })
  }
  onDelete(datosPortfolio_id: Skill){
    this.datosPortfolio.DeletePrograming(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();}) 
 }
 onEdit(datosPortfolio_id: Skill){
  this.datosPortfolio.IdPrograming(datosPortfolio_id).subscribe((data)=>{
    this.datos = data;
    console.log(this.datos);
  })
 }
}