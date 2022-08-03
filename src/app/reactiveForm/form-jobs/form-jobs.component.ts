import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-form-jobs',
  templateUrl: './form-jobs.component.html',
  styleUrls: ['./form-jobs.component.css']
})
export class FormJobsComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  addJob = new FormGroup ({
    job: new FormControl(''),
    cargo: new FormControl(''),
    funciones: new FormControl(''),
    ingresoSalida: new FormControl(''),
    contacto: new FormControl('')
  });

  ngOnInit(): void {
  }

  SaveJob(){
    // console.log(this.addJob.value)
     this.datosPortfolio.SaveJob(this.addJob.value).subscribe(
       (result)=> {
       //  console.log(result)
       this.addJob.reset({});
       }); 
   }
}
