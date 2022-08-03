import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Subscription } from 'rxjs';
import { SkillSoft } from 'src/assets/data/Data';
import {Portfolio} from 'src/assets/data/Data';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {
  suscription: Subscription = new Subscription;
  softList: any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.getData();
    this.suscription = this.datosPortfolio.refresh$.subscribe(()=>{
    this.getData();
    }) 
  }
    
    onDelete(datosPortfolio_id: SkillSoft){
    this.datosPortfolio.DeleteSoft(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();})
    }
    getData(){
      this.datosPortfolio.obtenerSoft().subscribe(respuesta =>{console.log(respuesta);
        this.softList=respuesta;
      });
    }
}