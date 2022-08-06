import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from 'src/app/servicios/portfolio.service'; 

@Component({
  selector: 'app-form-programing',
  templateUrl: './form-programing.component.html',
  styleUrls: ['./form-programing.component.css']
})
export class FormProgramingComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  @Input() object:any=[]

  addPrograming = new FormGroup ({
    tag: new FormControl(''),
    porcentaje: new FormControl(''),
    color: new FormControl('')
  });

  editMode: boolean = false;


  ngOnInit(): void {  }

  Set(){
    this.addPrograming.setValue({
      tag: this.object.tag,
      porcentaje: this.object.porcentaje,
      color: this.object.color,
    });
    this.editMode=true;
  }
  SavePrograming(){
    if (!this.editMode) {
    this.datosPortfolio.SavePrograming(this.addPrograming.value).subscribe(
      (result)=> {this.addPrograming.reset({});
      }); 
  }
    else {
      this.datosPortfolio.UpdatePrograming(this.object.id, this.addPrograming.value).subscribe((result)=>{this.addPrograming.reset({}); this.editMode = false;
    })
    }
  }
}