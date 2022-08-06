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

  addBtn = new FormGroup ({
    redSocial: new FormControl(''),
    btn: new FormControl(''),
    url: new FormControl(''),
    color: new FormControl('')
  });

  editMode: boolean = false;

  ngOnInit(): void { }

  Set(){
    this.addBtn.setValue({
      redSocial: this.object.redSocial,
      btn: this.object.btn,
      url: this.object.url,
      color: this.object.color
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