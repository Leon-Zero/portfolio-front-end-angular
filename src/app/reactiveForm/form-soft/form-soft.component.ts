import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Skill, SkillSoft } from 'src/assets/data/Data';

@Component({
  selector: 'app-form-soft',
  templateUrl: './form-soft.component.html',
  styleUrls: ['./form-soft.component.css']
})
export class FormSoftComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }
  @Input() object:any=[]
  addSoft = new FormGroup ({
    tag: new FormControl(''),
    porcentaje: new FormControl(''),
    modal: new FormControl(''),
    beneficio: new FormControl('')
  });
  editMode: boolean = false;
  ngOnInit(): void {  }
  Set(){
    this.addSoft.setValue({
      tag: this.object.tag,
      porcentaje: this.object.porcentaje,
      modal: this.object.modal,
      beneficio: this.object.beneficio
    });
    this.editMode=true;
  }
  SaveSoft(){
    if (!this.editMode) {
      this.datosPortfolio.SaveSoft(this.addSoft.value).subscribe(
        (result)=> {
        this.addSoft.reset({});
        });       
    }
    else {
      this.datosPortfolio.UpdateSoft(this.object.id, this.addSoft.value).subscribe((result)=>{this.addSoft.reset({}); this.editMode = false;
    })
    }
  }
}