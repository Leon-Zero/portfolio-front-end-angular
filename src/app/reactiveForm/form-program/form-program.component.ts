import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-form-program',
  templateUrl: './form-program.component.html',
  styleUrls: ['./form-program.component.css']
})
export class FormProgramComponent implements OnInit {
  constructor(private datosPortfolio:PortfolioService) { }

  addProgram = new FormGroup ({
    tag: new FormControl(''),
    porcentaje: new FormControl(''),
    fill: new FormControl('')
  });

  ngOnInit(): void {
  }
  SaveProgram(){
   // console.log(this.addProgram.value)
    this.datosPortfolio.SaveProgram(this.addProgram.value).subscribe(
      (result)=> {
      //  console.log(result)
      this.addProgram.reset({});
      }); 
  }
}