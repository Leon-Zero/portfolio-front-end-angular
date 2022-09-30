import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { SchoolService } from 'src/app/servicios/portfolio-service/school.service';


@Component({
  selector: 'app-form-academica',
  templateUrl: './form-academica.component.html',
  styleUrls: ['./form-academica.component.css']
})
export class FormAcademicaComponent implements OnInit {

  constructor(private datosPortfolio: SchoolService) { }

  @Input() object:any=[];
  @Input() onSet:boolean = false


  addAcademica = new FormGroup ({
    id: new FormControl(''),
    titulo_tag: new FormControl(''),
    instituto: new FormControl(''),
    logo: new FormControl(''),
    carrera: new FormControl(''),
    estado: new FormControl(''),
    ingreso: new FormControl('')
  });

  editMode: boolean = false;

  ngOnInit(): void { }

  Set(){
    this.addAcademica.setValue({
    id: this.object.id,
    titulo_tag: this.object.titulo_tag,
    instituto: this.object.instituto,
    logo: this.object.logo,
    carrera: this.object.carrera,
    estado: this.object.estado,
    ingreso: this.object.ingreso
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