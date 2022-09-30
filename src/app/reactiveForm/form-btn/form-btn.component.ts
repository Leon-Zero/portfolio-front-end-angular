import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { BtnRsService } from 'src/app/servicios/portfolio-service/btn-rs.service';

@Component({
  selector: 'app-form-btn',
  templateUrl: './form-btn.component.html',
  styleUrls: ['./form-btn.component.css']
})
export class FormBtnComponent implements OnInit {

  constructor(private datosPortfolio: BtnRsService) { }

  @Input() object:any=[];
  @Input() onSet:boolean = false

  addBtn = new FormGroup ({
    id: new FormControl(''),
    red_social: new FormControl(''),
    btn: new FormControl(''),
    url: new FormControl(''),
    color: new FormControl('')
  });

  editMode: boolean = false;

  ngOnInit(): void { }

  Set(){
    this.addBtn.setValue({
      id: this.object.id,
      red_social: this.object.red_social,
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