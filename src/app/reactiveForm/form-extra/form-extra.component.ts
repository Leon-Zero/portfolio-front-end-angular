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

  addExtra = new FormGroup ({
    tipo: new FormControl(''),
    actividad: new FormControl(''),
  });

  editMode: boolean = false;

  ngOnInit(): void { }

  SetExtra(){
    this.addExtra.setValue({
    tipo: this.object.tipo,
    actividad: this.object.actividad,
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