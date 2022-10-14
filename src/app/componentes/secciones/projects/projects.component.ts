import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/portfolio-service/proyecto.service';
import { Subscription } from 'rxjs';
import { Proyecto } from 'src/assets/data/Data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  suscription: Subscription = new Subscription;
  projectsList: Proyecto[] = [];
  datos:Object=[]
  displayDelete: boolean=false 
  displayNew: boolean=false
  displayEdit: boolean=false
  addClass: string ="";

  constructor(private datosPortfolio: ProyectoService) { }

  ngOnInit(): void {
    this.getData();
    this.suscription = this.datosPortfolio.refresh$.subscribe(()=>{
    this.getData();
    }) 
  }

  getData(){
    this.datosPortfolio.obtenerProyecto().subscribe(data =>{
    //console.log(data);
    this.projectsList=data;
    });
  }
  setClasses(id: string){
    this.addClass = id;
    //console.log(this.addClass)
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
    this.datosPortfolio.DeleteProyecto(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();}) 
  }
  onEdit(datosPortfolio_id: number){
    this.datosPortfolio.IdProyecto(datosPortfolio_id).subscribe((data)=>{
      this.datos = data;
      console.log(this.datos);
    })
   }
}
