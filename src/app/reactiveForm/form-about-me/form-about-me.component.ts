import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { DatosService } from 'src/app/servicios/portfolio-service/datos.service';

@Component({
  selector: 'app-form-about-me',
  templateUrl: './form-about-me.component.html',
  styleUrls: ['./form-about-me.component.css'] 
})
export class FormAboutMeComponent implements OnInit {

  constructor(private datosPortfolio: DatosService) { }

  @Input() object:any=[];

  addData = new FormGroup ({
    id: new FormControl(''),
    title_name: new FormControl(''),
    name: new FormControl(''),
    ubicacion: new FormControl(''),
    school: new FormControl(''),
    perfil: new FormControl('')
  });

  ngOnInit(): void { }

  Set(){
    this.addData.setValue({
    id: this.object.id,
    title_name: this.object.title_name,
    name: this.object.name,
    ubicacion: this.object.ubicacion,
    school: this.object.school,
    perfil: this.object.perfil
    });
  }
  EditData(){
    this.datosPortfolio.UpdateData(this.object.id, this.addData.value).subscribe(
    (result)=>{this.addData.reset({});
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
}

