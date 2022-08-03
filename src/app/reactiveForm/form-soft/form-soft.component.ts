import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-form-soft',
  templateUrl: './form-soft.component.html',
  styleUrls: ['./form-soft.component.css']
})
export class FormSoftComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  addSoft = new FormGroup ({
    tag: new FormControl(''),
    porcentaje: new FormControl(''),
    modal: new FormControl(''),
    beneficio: new FormControl('')
  });

  ngOnInit(): void {
  }
  SaveSoft(){
   // console.log(this.addSoft.value)
    this.datosPortfolio.SaveSoft(this.addSoft.value).subscribe(
      (result)=> {
      //  console.log(result)
      this.addSoft.reset({});
      }); 
  }
}