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
  datos:Object=[]
  displayDelete: boolean=false 
  displayNew: boolean=false
  displayEdit: boolean=false


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
  onDisplayDelete( active:boolean){
    if (active) {
      this.displayDelete = true
    }
    else {
      this.displayDelete = false
    }
  }
  onDisplayNew( active:boolean){
    if (active) {
      this.displayNew = true
    }
    else {
      this.displayNew = false
    }
  }
  onDisplayEdit( active:boolean){
    if (active) {
      this.displayEdit = true
    }
    else {
      this.displayEdit = false
    }
  }
  onDelete(datosPortfolio_id: Job){
    this.datosPortfolio.DeleteJob(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();}) 
  }
  onEdit(datosPortfolio_id: Job){
    this.datosPortfolio.IdJob(datosPortfolio_id).subscribe((data)=>{
      this.datos = data;
      console.log(this.datos);
    })
   }
}