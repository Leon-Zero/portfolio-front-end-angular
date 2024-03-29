import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ImageService } from 'src/app/servicios/image.service';
import { DatosService } from 'src/app/servicios/portfolio-service/datos.service';

@Component({
  selector: 'app-form-about-me',
  templateUrl: './form-about-me.component.html',
  styleUrls: ['./form-about-me.component.css'] 
})
export class FormAboutMeComponent implements OnInit {

  constructor(private datosPortfolio: DatosService,
              public imageService: ImageService) { }

  @Input() object:any=[];
  reset: string = "./assets/imagenes/perfil.jpg";
  editImg: boolean = false;
  okAbout: boolean = false;
  valueAbout: string = "";

  addData = new FormGroup ({
    id: new FormControl(''),
    title_name: new FormControl(''),
    name: new FormControl(''),
    ubicacion: new FormControl(''),
    school: new FormControl(''),
    perfil: new FormControl('')
  });

  ngOnInit(): void {  }

  Set(){
    this.okAbout = true;
    this.addData.setValue({
    id: this.object.id,
    title_name: this.object.title_name,
    name: this.object.name,
    ubicacion: this.object.ubicacion,
    school: this.object.school,
    perfil: this.object.perfil
    });
    this.valueAbout = this.addData.value.perfil as string;
    this.imageService.aboutMe = this.addData.value.perfil as string;

  }
  EditData(){
    this.setImages();
    this.datosPortfolio.UpdateData(this.object.id, this.addData.value).subscribe(
    (result)=>{
      this.clean();
    })
    }
    //Codigo para agregar componente about-me, comentado por que solo se necesita una unica vez
    //Los botones de edicion eliminar y agregar para este componente están inutilizados.
    /*
    SaveData(){
        this.datosPortfolio.SaveData(this.addData.value).subscribe(
          (result)=> {
          this.addData.reset({});
          });       
      }
    */
  uploadImage($event: any){
    const idFile: string = this.object.id
    const name = `about_me_` + idFile;
    this.imageService.uploadImage($event, name);
    this.editImg = true;
    this.okAbout = false;
    setTimeout(() => {
    this.valueAbout = this.imageService.aboutMe as string;
    if (this.valueAbout !== "") {
      this.okAbout = true
    }
    }, 6000);
  }
  resetFile(){
    this.imageService.aboutMe = this.reset;
    this.valueAbout = this.reset;
    this.okAbout = true;
  }
  setImages(){
    this.addData.value.perfil = this.valueAbout;
  }
  clean(){
    this.imageService.aboutMe = "";
    this.editImg = false;
    this.valueAbout = "";
    this.okAbout = false;
    this.addData.reset({});
  }
}