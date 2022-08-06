import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-form-about-me',
  templateUrl: './form-about-me.component.html',
  styleUrls: ['./form-about-me.component.css']
})
export class FormAboutMeComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  @Input() object:any=[];

  addData = new FormGroup ({
    titleName: new FormControl(''),
    name: new FormControl(''),
    ubicacion: new FormControl(''),
    school: new FormControl(''),
    perfil: new FormControl(''),
  });

  ngOnInit(): void { }

  Set(){
    this.addData.setValue({
    titleName: this.object.titleName,
    name: this.object.name,
    ubicacion: this.object.ubicacion,
    school: this.object.school,
    perfil: this.object.perfil,
    });
  }
  EditData(){
    this.datosPortfolio.UpdateData(this.object.id, this.addData.value).subscribe(
    (result)=>{this.addData.reset({});
    })
    }
}

