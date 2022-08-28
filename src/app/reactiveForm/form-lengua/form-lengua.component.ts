import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-form-lengua',
  templateUrl: './form-lengua.component.html',
  styleUrls: ['./form-lengua.component.css']
})
export class FormLenguaComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  @Input() object:any=[];
  @Input() onSet:boolean = false  

  addLengua = new FormGroup ({
    tag: new FormControl(''),
    porcentaje: new FormControl(''),
    color: new FormControl(''),
    datos_id: new FormControl(1)
  });

  editMode: boolean = false;

  ngOnInit(): void { }

  Set(){
    this.addLengua.setValue({
      tag: this.object.tag,
      porcentaje: this.object.porcentaje,
      color: this.object.color,
      datos_id: this.object.datos_id
    });
    this.editMode=true;
  }
  SaveLengua(){
    if (!this.editMode) {
    this.datosPortfolio.SaveLengua(this.addLengua.value).subscribe(
      (result)=> {this.addLengua.reset({});
      }); 
    }
    else {
      this.datosPortfolio.UpdateLengua(this.object.id, this.addLengua.value).subscribe((result)=>{this.addLengua.reset({}); this.editMode = false;
    })
    }
  }
}