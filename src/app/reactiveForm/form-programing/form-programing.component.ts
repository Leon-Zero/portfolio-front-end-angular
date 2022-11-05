import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ProgramingService } from 'src/app/servicios/portfolio-service/programing.service';

@Component({
  selector: 'app-form-programing',
  templateUrl: './form-programing.component.html',
  styleUrls: ['./form-programing.component.css']
})
export class FormProgramingComponent implements OnInit {

  constructor(private datosPortfolio:ProgramingService) { }

  @Input() object:any=[]
  @Input() onSet:boolean = false

  addPrograming = new FormGroup ({
    id: new FormControl(''),
    tag: new FormControl(''),
    porcentaje: new FormControl(''),
    color: new FormControl('')
  });

  editMode: boolean = false;

  ngOnInit(): void {  }

  Set(){
    this.editMode= true;
    this.addPrograming.setValue({
      id: this.object.id,
      tag: this.object.tag,
      porcentaje: this.object.porcentaje,
      color: this.object.color
    });
  }
  SavePrograming(){
    if (!this.editMode) {
    this.datosPortfolio.SavePrograming(this.addPrograming.value).subscribe(
      (result)=> {
        this.editMode= false;
        this.addPrograming.reset({});
      }); 
  }
    else {
      this.datosPortfolio.UpdatePrograming(this.object.id, this.addPrograming.value).subscribe((result)=>{this.addPrograming.reset({}); this.editMode = false;
    })
    }
  }
}