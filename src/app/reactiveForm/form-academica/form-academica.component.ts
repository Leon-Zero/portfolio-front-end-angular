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
  okAcademica: boolean = false;
  valueAcademica: string = "";
  editMode: boolean = false;

  addAcademica = new FormGroup ({
    id: new FormControl(''),
    titulo_tag: new FormControl(''),
    instituto: new FormControl(''),
    carrera: new FormControl(''),
    estado: new FormControl(''),
    ingreso: new FormControl(''),
    logo: new FormControl(''),
  });


  ngOnInit(): void { }

  Set(){
    this.editMode = true;
    this.okAcademica = true;
    this.addAcademica.setValue({
      id: this.object.id,
      titulo_tag: this.object.titulo_tag,
      instituto: this.object.instituto,
      carrera: this.object.carrera,
      estado: this.object.estado,
      ingreso: this.object.ingreso,
      logo: this.object.logo,
    });
    this.valueAcademica = this.addAcademica.value.logo as string;
    this.imageService.academica = this.addAcademica.value.logo as string;
  }
  SaveAcademica(){
    this.setImages();
      if (!this.editMode) {
        this.datosPortfolio.SaveAcademica(this.addAcademica.value).subscribe(
        (result)=> {
          this.clean();
        });
      }
    else {
      this.datosPortfolio.UpdateAcademica(this.object.id, this.addAcademica.value).subscribe((result)=>{
        this.editMode = false;
        this.clean();
    });
    }
  }

  uploadImage($event: any){
    const nameFile: string = this.addAcademica.value.instituto as string;
    const name = `academica_` + nameFile;
    this.imageService.uploadImage($event, name);
    this.okAcademica = false;
    setTimeout(() => {
    this.valueAcademica = this.imageService.academica as string;
    if (this.valueAcademica !== "") {
      this.okAcademica = true
    }
    }, 6000);
  }
  setImages(){
    this.addAcademica.value.logo = this.valueAcademica;
  }
  clean(){
    this.imageService.academica = "";
    this.valueAcademica = "";
    this.okAcademica = false;
    this.addAcademica.reset({});
  }
}