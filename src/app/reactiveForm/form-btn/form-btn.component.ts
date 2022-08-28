import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from 'src/app/servicios/portfolio.service'; 

@Component({
  selector: 'app-form-btn',
  templateUrl: './form-btn.component.html',
  styleUrls: ['./form-btn.component.css']
})
export class FormBtnComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  @Input() object:any=[];
  @Input() onSet:boolean = false

  addBtn = new FormGroup ({
    red_social: new FormControl(''),
    btn: new FormControl(''),
    url: new FormControl(''),
    color: new FormControl(''),
    datos_id: new FormControl(1)
  });

  editMode: boolean = false;

  ngOnInit(): void { }

  Set(){
    this.addBtn.setValue({
      red_social: this.object.red_social,
      btn: this.object.btn,
      url: this.object.url,
      color: this.object.color,
      datos_id: this.object.datos_id
     });
    this.editMode=true;
  }
  SaveBtn(){
    if (!this.editMode) {
     this.datosPortfolio.SaveBtn(this.addBtn.value).subscribe(
       (result)=> {this.addBtn.reset({});}); 
    }
    else {
      this.datosPortfolio.UpdateBtn(this.object.id, this.addBtn.value).subscribe((result)=>{this.addBtn.reset({}); this.editMode = false;
    })
    }
  }
}