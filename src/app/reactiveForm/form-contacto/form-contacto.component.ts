import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactoService } from 'src/app/servicios/portfolio-service/contacto.service';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {

  constructor(private datosPortfolio: ContactoService) { }

  @Input() object:any=[];

  addContacto = new FormGroup ({
    id: new FormControl(''),
    mail: new FormControl(''),
    asunto: new FormControl(''),
    mensaje: new FormControl('')
  });

  ngOnInit(): void { }

  Set(){
    this.addContacto.setValue({
    id: this.object.id,
    mail: this.object.mail,
    asunto: this.object.asunto,
    mensaje: this.object.mensaje
    });
  }
  EditContacto(){
    this.datosPortfolio.UpdateContacto(this.object.id, this.addContacto.value).subscribe(
    (result)=>{this.addContacto.reset({});
    })
  }
}
