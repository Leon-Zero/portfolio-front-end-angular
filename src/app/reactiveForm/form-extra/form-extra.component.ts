import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-form-extra',
  templateUrl: './form-extra.component.html',
  styleUrls: ['./form-extra.component.css']
})
export class FormExtraComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  addExtra = new FormGroup ({
    tipo: new FormControl(''),
    actividad: new FormControl(''),
  });

  ngOnInit(): void {
  }
  SaveExtra(){
    // console.log(this.addExtra.value)
     this.datosPortfolio.SaveExtra(this.addExtra.value).subscribe(
       (result)=> {
       //  console.log(result)
       this.addExtra.reset({});
       }); 
   }
}
