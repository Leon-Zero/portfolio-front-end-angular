import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-form-academica',
  templateUrl: './form-academica.component.html',
  styleUrls: ['./form-academica.component.css']
})
export class FormAcademicaComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  @Input() object:any=[];
  @Input() onSet:boolean = false


  addAcademica = new FormGroup ({
    titulo_tag: new FormControl(''),
    instituto: new FormControl(''),
    logo: new FormControl(''),
    carrera: new FormControl(''),
    estado: new FormControl(''),
    ingreso: new FormControl(''),
    datos_id: new FormControl(1)

  });

  editMode: boolean = false;

  ngOnInit(): void { }

  Set(){
    this.addAcademica.setValue({
    titulo_tag: this.object.titulo_tag,
    instituto: this.object.instituto,
    logo: this.object.logo,
    carrera: this.object.carrera,
    estado: this.object.estado,
    ingreso: this.object.ingreso,
    datos_id: this.object.datos_id
     });
    this.editMode=true;
  }
  SaveAcademica(){
    if (!this.editMode) {
      this.datosPortfolio.SaveAcademica(this.addAcademica.value).subscribe(
       (result)=> {this.addAcademica.reset({});}); 
    }
    else {
      this.datosPortfolio.UpdateAcademica(this.object.id, this.addAcademica.value).subscribe((result)=>{this.addAcademica.reset({}); this.editMode = false;
    })
    }
  }
}