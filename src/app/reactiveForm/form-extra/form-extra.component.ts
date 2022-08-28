import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-form-extra',
  templateUrl: './form-extra.component.html',
  styleUrls: ['./form-extra.component.css']
})
export class FormExtraComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  @Input() object:any=[];
  @Input() onSet:boolean = false


  addExtra = new FormGroup ({
    tipo: new FormControl(''),
    actividad: new FormControl(''),
    datos_id: new FormControl(1)
  });

  editMode: boolean = false;

  ngOnInit(): void { }

  SetExtra(){
    this.addExtra.setValue({
    tipo: this.object.tipo,
    actividad: this.object.actividad,
    datos_id: this.object.datos_id
     });
    this.editMode=true;
  }
  SaveExtra(){
    if (!this.editMode) {
       this.datosPortfolio.SaveExtra(this.addExtra.value).subscribe(
       (result)=> { this.addExtra.reset({});}); 
     }
     else {
      this.datosPortfolio.UpdateExtra(this.object.id, this.addExtra.value).subscribe((result)=>{this.addExtra.reset({}); this.editMode = false;
    })
    }
  }
}