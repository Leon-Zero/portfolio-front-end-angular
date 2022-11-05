import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { SchoolService } from 'src/app/servicios/portfolio-service/school.service';

@Component({
  selector: 'app-form-extra',
  templateUrl: './form-extra.component.html',
  styleUrls: ['./form-extra.component.css']
})
export class FormExtraComponent implements OnInit {

  constructor(private datosPortfolio: SchoolService) { }

  @Input() object:any=[];
  @Input() onSet:boolean = false


  addExtra = new FormGroup ({
    id: new FormControl(''),
    tipo: new FormControl(''),
    actividad: new FormControl('')
    });

  editMode: boolean = false;

  ngOnInit(): void { }

  SetExtra(){
    this.editMode= true;
    this.addExtra.setValue({
    id: this.object.id,
    tipo: this.object.tipo,
    actividad: this.object.actividad,
     });
  }
  SaveExtra(){
    if (!this.editMode) {
       this.datosPortfolio.SaveExtra(this.addExtra.value).subscribe(
       (result)=> { 
        this.editMode= false;
        this.addExtra.reset({});}); 
     }
     else {
      this.datosPortfolio.UpdateExtra(this.object.id, this.addExtra.value).subscribe((result)=>{this.addExtra.reset({}); this.editMode = false;
    })
    }
  }
}