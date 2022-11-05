import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ImageService } from 'src/app/servicios/image.service';
import { SchoolService } from 'src/app/servicios/portfolio-service/school.service';


@Component({
  selector: 'app-form-academica',
  templateUrl: './form-academica.component.html',
  styleUrls: ['./form-academica.component.css']
})
export class FormAcademicaComponent implements OnInit {

  constructor(private datosPortfolio: SchoolService,
              public imageService: ImageService) { }

  @Input() object:any=[];
  @Input() onSet:boolean = false
  reset: string = "./assets/imagenes/ucc.png";
  editImg: boolean = false;

  addAcademica = new FormGroup ({
    id: new FormControl(''),
    titulo_tag: new FormControl(''),
    instituto: new FormControl(''),
    carrera: new FormControl(''),
    estado: new FormControl(''),
    ingreso: new FormControl(''),
    logo: new FormControl(''),
  });

  editMode: boolean = false;

  ngOnInit(): void { }

  Set(){
    this.editMode=true;
    this.addAcademica.setValue({
    id: this.object.id,
    titulo_tag: this.object.titulo_tag,
    instituto: this.object.instituto,
    carrera: this.object.carrera,
    estado: this.object.estado,
    ingreso: this.object.ingreso,
    logo: this.object.logo,
     });
  }
  SaveAcademica(){
    if (!this.editMode) {
      this.datosPortfolio.SaveAcademica(this.addAcademica.value).subscribe(
       (result)=> {this.addAcademica.reset({});}); 
    }
    else {
      if (this.addAcademica.value.logo !== this.object.perfil) {
        this.addAcademica.value.logo = this.imageService.url;
      }
      this.datosPortfolio.UpdateAcademica(this.object.id, this.addAcademica.value).subscribe((result)=>{
        this.imageService.url="";
        this.editImg = false;
        this.addAcademica.reset({}); 
        this.editMode = false;
    })
    }
  }
  uploadImage($event: any){
    const nameFile: string = this.addAcademica.value.instituto as string;
    const name = `academica` + nameFile;
    this.imageService.uploadImage($event, name);
    this.editImg = true;
  }
  resetFile(){
    this.imageService.url = this.reset;
  }
}