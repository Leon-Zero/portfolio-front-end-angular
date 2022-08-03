import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Skill } from 'src/assets/data/Data';

@Component({
  selector: 'app-form-programing',
  templateUrl: './form-programing.component.html',
  styleUrls: ['./form-programing.component.css']
})
export class FormProgramingComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  addPrograming = new FormGroup ({
    tag: new FormControl(''),
    porcentaje: new FormControl(''),
    fill: new FormControl('')
  });

  ngOnInit(): void {
  }
  mesage: boolean= false
  SaveData(){
   // console.log(this.addPrograming.value)
    this.datosPortfolio.SavePrograming(this.addPrograming.value).subscribe(
      (result)=> {
      //  console.log(result)
      this.mesage=true
      this.addPrograming.reset({});
      }); 
  }

}