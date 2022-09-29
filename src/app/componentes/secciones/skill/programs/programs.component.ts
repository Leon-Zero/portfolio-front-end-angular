import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Skill } from 'src/assets/data/Data';
import { ProgramsService } from 'src/app/servicios/portfolio-service/programs.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  suscription: Subscription = new Subscription;
  programsList: Skill[]= [];
  datos:Object=[]
  displayDelete: boolean=false 
  displayNew: boolean=false
  displayEdit: boolean=false

  constructor(private datosPortfolio: ProgramsService) { }

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
    this.datosPortfolio.DeleteProgram(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();}) 
  }
  getData(){
    this.datosPortfolio.obtenerProgram().subscribe(data =>{console.log(data);
      this.programsList=data;
    });
  }
  onEdit(datosPortfolio_id: number){
    this.datosPortfolio.IdProgram(datosPortfolio_id).subscribe((data)=>{
      this.datos = data;
      console.log(this.datos);
    })
   }
  }