import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from 'src/app/servicios/portfolio.service'; 

@Component({
  selector: 'app-form-lengua',
  templateUrl: './form-lengua.component.html',
  styleUrls: ['./form-lengua.component.css']
})
export class FormLenguaComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  addLengua = new FormGroup ({
    tag: new FormControl(''),
    porcentaje: new FormControl(''),
    color: new FormControl('')
  });

  ngOnInit(): void {
  }
  SaveLengua(){
   // console.log(this.addLengua.value)
    this.datosPortfolio.SaveLengua(this.addLengua.value).subscribe(
      (result)=> {
      //  console.log(result)
      this.addLengua.reset({});
      }); 
  }
}