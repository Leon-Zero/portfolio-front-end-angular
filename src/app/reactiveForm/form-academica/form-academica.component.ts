import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-form-academica',
  templateUrl: './form-academica.component.html',
  styleUrls: ['./form-academica.component.css']
})
export class FormAcademicaComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  addAcademica = new FormGroup ({
    tituloTag: new FormControl(''),
    instituto: new FormControl(''),
    logo: new FormControl(''),
    carrera: new FormControl(''),
    estado: new FormControl(''),
    ingreso: new FormControl('')
  });

  ngOnInit(): void {
  }
  SaveAcademica(){
    // console.log(this.addAcademica.value)
     this.datosPortfolio.SaveAcademica(this.addAcademica.value).subscribe(
       (result)=> {
       //  console.log(result)
       this.addAcademica.reset({});
       }); 
   }
}
