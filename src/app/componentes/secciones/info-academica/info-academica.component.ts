import { Component, OnInit } from '@angular/core';
import { Academica, ExtraCurricular } from 'src/assets/data/Data'; 
import { Subscription } from 'rxjs';  
import { SchoolService } from 'src/app/servicios/portfolio-service/school.service';


@Component({
  selector: 'app-info-academica',
  templateUrl: './info-academica.component.html',
  styleUrls: ['./info-academica.component.css']
})
export class InfoAcademicaComponent implements OnInit {
 
  suscription: Subscription = new Subscription;
  academica: Academica[]= [];
  extra: ExtraCurricular[]= [];
  datos:Object=[]
  displayDelete: boolean=false 
  displayNew: boolean=false
  displayEdit: boolean=false

  constructor(private datosPortfolio: SchoolService) { }

  ngOnInit(): void {
   this.getData();
   this.getDataExtra();
   this.suscription = this.datosPortfolio.refresh$.subscribe(()=>{
   this.getData();
   this.getDataExtra();
   })
  }
  getData(){
    this.datosPortfolio.obtenerAcademica().subscribe(data =>{
      //console.log(data);
      this.academica=data;
    });
  }
  getDataExtra(){
    this.datosPortfolio.obtenerExtra().subscribe(data =>{
      //console.log(data);
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
      this.displayNew = true;
    }
    else {
      this.displayNew = false
    }
    if (this.displayEdit) {
        this.displayEdit = false
      }
  }
  onDisplayEdit( active:boolean){
      if (active) {
        this.displayEdit = true
      }
      else {
        this.displayEdit = false
      }
      if (this.displayNew) {
        this.displayNew = false
      }
  }
  onDelete(datosPortfolio_id: number){
    this.datosPortfolio.DeleteAcademica(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();}) 
 }
  onDeleteExtra(datosPortfolio_id: number){
    this.datosPortfolio.DeleteExtra(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();}) 
  }
  onEdit(datosPortfolio_id: number){
    this.datosPortfolio.IdAcademica(datosPortfolio_id).subscribe((data)=>{
      this.datos = data;
    })
   }
   onEditExtra(datosPortfolio_id: number){
    this.datosPortfolio.IdExtra(datosPortfolio_id).subscribe((data)=>{
      this.datos = data;
    })
   }
}