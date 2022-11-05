import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { JobService } from 'src/app/servicios/portfolio-service/job.service';

@Component({
  selector: 'app-form-jobs',
  templateUrl: './form-jobs.component.html',
  styleUrls: ['./form-jobs.component.css']
})
export class FormJobsComponent implements OnInit {

  constructor(private datosPortfolio: JobService) { }

  @Input() object:any=[];
  @Input() onSet:boolean = false  

  addJob = new FormGroup ({
    id: new FormControl(''),
    job: new FormControl(''),
    cargo: new FormControl(''),
    funciones: new FormControl(''),
    ingreso_salida: new FormControl(''),
    contacto: new FormControl('')
  });

  editMode: boolean = false;

  ngOnInit(): void { }

  Set(){
    this.editMode=true;
    this.addJob.setValue({
      id: this.object.id,
      job: this.object.job,
      cargo: this.object.cargo,
      funciones: this.object.funciones,
      ingreso_salida: this.object.ingreso_salida,
      contacto: this.object.contacto
    });
  }

  SaveJob(){
    if (!this.editMode) {
     this.datosPortfolio.SaveJob(this.addJob.value).subscribe(
       (result)=> {
        this.editMode = false;
        this.addJob.reset({});}); 
    }
    else {
      this.datosPortfolio.UpdateJob(this.object.id, this.addJob.value).subscribe((result)=>{this.addJob.reset({}); this.editMode = false;
    })
    }
  }
}