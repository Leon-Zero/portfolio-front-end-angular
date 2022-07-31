import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { BtnR } from 'src/assets/data/Data';

@Component({
  selector: 'app-container-btn-rs',
  templateUrl: './container-btn-rs.component.html',
  styleUrls: ['./container-btn-rs.component.css']
})
export class ContainerBtnRSComponent implements OnInit {
  
  socialList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerBtn().subscribe(data =>{console.log(data);
      this.socialList=data;
    });
  }
  onDelete(datosPortfolio_id: BtnR){
    this.datosPortfolio.DeleteBtn(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();})
    }
}