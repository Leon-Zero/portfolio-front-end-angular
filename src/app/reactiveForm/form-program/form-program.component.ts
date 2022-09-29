import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ProgramsService } from 'src/app/servicios/portfolio-service/programs.service';

@Component({
  selector: 'app-form-program',
  templateUrl: './form-program.component.html',
  styleUrls: ['./form-program.component.css']
})
export class FormProgramComponent implements OnInit {
  constructor(private datosPortfolio: ProgramsService) { }

  @Input() object:any=[];
  @Input() onSet:boolean = false


  addProgram = new FormGroup ({
    id: new FormControl(''),
    tag: new FormControl(''),
    porcentaje: new FormControl(''),
    color: new FormControl('')
  });

  editMode: boolean = false;

  ngOnInit(): void { }

  Set(){
    this.addProgram.setValue({
      id: this.object.id,
      tag: this.object.tag,
      porcentaje: this.object.porcentaje,
      color: this.object.color
    });
    this.editMode=true;
  }
  SaveProgram(){
    if (!this.editMode) {
      this.datosPortfolio.SaveProgram(this.addProgram.value).subscribe(
      (result)=> {this.addProgram.reset({});
      }); 
    }
    else {
      this.datosPortfolio.UpdateProgram(this.object.id, this.addProgram.value).subscribe((result)=>{this.addProgram.reset({}); this.editMode = false;
    })
    }
  }
}