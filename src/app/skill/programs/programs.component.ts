import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { Skill } from 'src/assets/data/Data';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  suscription: Subscription = new Subscription;
  programsList:any;
  datos:Object=[]

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.getData();
    this.suscription = this.datosPortfolio.refresh$.subscribe(()=>{
    this.getData();
    }) 
  }
  onDelete(datosPortfolio_id: Skill){
    this.datosPortfolio.DeleteProgram(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();}) 
  }
  getData(){
    this.datosPortfolio.obtenerProgram().subscribe(data =>{console.log(data);
      this.programsList=data;
    });
  }
  onEdit(datosPortfolio_id: Skill){
    this.datosPortfolio.IdProgram(datosPortfolio_id).subscribe((data)=>{
      this.datos = data;
      console.log(this.datos);
    })
   }
  }