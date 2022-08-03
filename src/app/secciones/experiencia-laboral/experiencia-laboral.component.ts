import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Job } from 'src/assets/data/Data';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  suscription: Subscription = new Subscription;
  jobsList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.getData();
    this.suscription = this.datosPortfolio.refresh$.subscribe(()=>{
    this.getData();
    }) 
  }
  getData(){
    this.datosPortfolio.obtenerJob().subscribe(data =>{console.log(data);
    this.jobsList=data;
    });
  }
  onDelete(datosPortfolio_id: Job){
    this.datosPortfolio.DeleteJob(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();}) 
  }
}