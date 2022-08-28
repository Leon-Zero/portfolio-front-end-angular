import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from 'src/app/servicios/portfolio.service'; 

@Component({
  selector: 'app-form-jobs',
  templateUrl: './form-jobs.component.html',
  styleUrls: ['./form-jobs.component.css']
})
export class FormJobsComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  @Input() object:any=[];
  @Input() onSet:boolean = false  

  addJob = new FormGroup ({
    job: new FormControl(''),
    cargo: new FormControl(''),
    funciones: new FormControl(''),
    ingreso_salida: new FormControl(''),
    contacto: new FormControl(''),
    datos_id: new FormControl(1)

  });

  editMode: boolean = false;

  ngOnInit(): void { }

  Set(){
    this.addJob.setValue({
      job: this.object.job,
      cargo: this.object.cargo,
      funciones: this.object.funciones,
      ingreso_salida: this.object.ingreso_salida,
      contacto: this.object.contacto,
      datos_id: this.object.datos_id
     });
    this.editMode=true;
  }

  SaveJob(){
    if (!this.editMode) {
     this.datosPortfolio.SaveJob(this.addJob.value).subscribe(
       (result)=> {this.addJob.reset({});}); 
    }
    else {
      this.datosPortfolio.UpdateJob(this.object.id, this.addJob.value).subscribe((result)=>{this.addJob.reset({}); this.editMode = false;
    })
    }
  }
}