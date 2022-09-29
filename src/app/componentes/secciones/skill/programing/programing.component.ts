import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProgramingService } from 'src/app/servicios/portfolio-service/programing.service';
import { Skill } from 'src/assets/data/Data';

@Component({
  selector: 'app-programing',
  templateUrl: './programing.component.html',
  styleUrls: ['./programing.component.css']
})
export class ProgramingComponent implements OnInit {

  suscription: Subscription = new Subscription;
  programingList: Skill[]= [];
  datos:Object=[]
  displayDelete: boolean=false 
  displayNew: boolean=false
  displayEdit: boolean=false
  constructor(private datosPortfolio: ProgramingService) { }

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
    this.datosPortfolio.DeletePrograming(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();}) 
 }
 onEdit(datosPortfolio_id: number){
  this.datosPortfolio.IdPrograming(datosPortfolio_id).subscribe((data)=>{
    this.datos = data;
    console.log(this.datos);
  })
 }
}