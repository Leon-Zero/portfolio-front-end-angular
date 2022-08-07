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
    
  getData(){
    this.datosPortfolio.obtenerSoft().subscribe(respuesta =>{console.log(respuesta);
      this.softList=respuesta;
    });
  }
    onDelete(datosPortfolio_id: SkillSoft){
    this.datosPortfolio.DeleteSoft(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();})
    }
    onEdit(datosPortfolio_id: SkillSoft){
      this.datosPortfolio.IdSoft(datosPortfolio_id).subscribe((data)=>{
        this.datos = data;
        console.log(this.datos);
      })
    }
}