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
}
