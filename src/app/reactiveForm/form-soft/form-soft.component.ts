import { Component, Input, OnInit} from '@angular/core'; 
import { FormGroup, FormControl } from "@angular/forms";
import { SoftService } from 'src/app/servicios/portfolio-service/soft.service'; 

@Component({
  selector: 'app-form-soft',
  templateUrl: './form-soft.component.html',
  styleUrls: ['./form-soft.component.css']
})
export class FormSoftComponent implements OnInit {

  constructor(private datosPortfolio: SoftService) { }

  @Input() object:any=[]
  @Input() onSet:boolean = false 

  addSoft = new FormGroup ({
    id: new FormControl(''),
    tag: new FormControl(''),
    porcentaje: new FormControl(''),
    modal: new FormControl(''),
    beneficio: new FormControl('')
  });

  editMode: boolean = false;

  ngOnInit(): void {  
  }
  Set(){
    this.editMode=true;
    this.addSoft.setValue({
      id: this.object.id,
      tag: this.object.tag,
      porcentaje: this.object.porcentaje,
      modal: this.object.modal,
      beneficio: this.object.beneficio
    });
  }
  SaveSoft(){
    if (!this.editMode) {
      this.datosPortfolio.SaveSoft(this.addSoft.value).subscribe(
        (result)=> {
        this.editMode = false;
        this.addSoft.reset({});
        });       
    }
    else {
      this.datosPortfolio.UpdateSoft(this.object.id, this.addSoft.value).subscribe((result)=>{
      this.addSoft.reset({});
      this.editMode = false;
    })
    }
  }
}