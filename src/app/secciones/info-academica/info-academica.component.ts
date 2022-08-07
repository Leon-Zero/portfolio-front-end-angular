import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Academica, ExtraCurricular } from 'src/assets/data/Data'; 
import { Subscription } from 'rxjs';  


@Component({
  selector: 'app-info-academica',
  templateUrl: './info-academica.component.html',
  styleUrls: ['./info-academica.component.css']
})
export class InfoAcademicaComponent implements OnInit {
 
  suscription: Subscription = new Subscription;
  academica:any;
  extra: any;
  datos:Object=[]
  displayDelete: boolean=false 
  displayNew: boolean=false
  displayEdit: boolean=false

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
   this.getData();
   this.getDataExtra();
   this.suscription = this.datosPortfolio.refresh$.subscribe(()=>{
   this.getData();
   this.getDataExtra();
   })
  }
  getData(){
    this.datosPortfolio.obtenerAcademica().subscribe(data =>{console.log(data);
      this.academica=data;
    });
  }
  getDataExtra(){
    this.datosPortfolio.obtenerExtra().subscribe(data =>{console.log(data);
      this.extra=data;
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
  onDelete(datosPortfolio_id: Academica){
    this.datosPortfolio.DeleteAcademica(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();}) 
 }
  onDeleteExtra(datosPortfolio_id: ExtraCurricular){
    this.datosPortfolio.DeleteExtra(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();}) 
  }
  onEdit(datosPortfolio_id: Academica){
    this.datosPortfolio.IdAcademica(datosPortfolio_id).subscribe((data)=>{
      this.datos = data;
      console.log(this.datos);
    })
   }
   onEditExtra(datosPortfolio_id: ExtraCurricular){
    this.datosPortfolio.IdExtra(datosPortfolio_id).subscribe((data)=>{
      this.datos = data;
      console.log(this.datos);
    })
   }
}