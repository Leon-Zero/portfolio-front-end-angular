import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Skill } from 'src/assets/data/Data'; 

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  suscription: Subscription = new Subscription;
  lenguageList:any;
  datos:Object=[]

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.getData();
    this.suscription = this.datosPortfolio.refresh$.subscribe(()=>{
    this.getData();
    }) 
  }
  getData(){
    this.datosPortfolio.obtenerLengua().subscribe(data =>{console.log(data);
      this.lenguageList=data;
    });
   }
  onDelete(datosPortfolio_id: Skill){
    this.datosPortfolio.DeleteLenguage(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();}) 
 }
 onEdit(datosPortfolio_id: Skill){
  this.datosPortfolio.IdLengua(datosPortfolio_id).subscribe((data)=>{
    this.datos = data;
    console.log(this.datos);
  })
 }
}