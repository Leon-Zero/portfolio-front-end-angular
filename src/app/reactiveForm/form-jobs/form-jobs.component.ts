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

  addJob = new FormGroup ({
    job: new FormControl(''),
    cargo: new FormControl(''),
    funciones: new FormControl(''),
    ingresoSalida: new FormControl(''),
    contacto: new FormControl('')
  });

  editMode: boolean = false;

  ngOnInit(): void { }

  Set(){
    this.addJob.setValue({
      job: this.object.job,
      cargo: this.object.cargo,
      funciones: this.object.funciones,
      ingresoSalida: this.object.ingresoSalida,
      contacto: this.object.contacto
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