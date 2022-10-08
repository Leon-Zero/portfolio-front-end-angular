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

  constructor(private datosPortfolio: ProyectoService) { }

  addClass: string ="";
  projectsList: Proyecto[] = [];
  suscription: Subscription = new Subscription;


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
    console.log(this.addClass)
  }

}
