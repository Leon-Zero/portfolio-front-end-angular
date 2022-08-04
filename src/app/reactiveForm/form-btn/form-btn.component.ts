import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-form-btn',
  templateUrl: './form-btn.component.html',
  styleUrls: ['./form-btn.component.css']
})
export class FormBtnComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  addBtn = new FormGroup ({
    redSocial: new FormControl(''),
    btn: new FormControl(''),
    url: new FormControl(''),
    color: new FormControl('')
  });

  ngOnInit(): void {
  }
  SaveBtn(){
    // console.log(this.addBtn.value)
     this.datosPortfolio.SaveBtn(this.addBtn.value).subscribe(
       (result)=> {
       //  console.log(result)
       this.addBtn.reset({});
       }); 
   }
 }