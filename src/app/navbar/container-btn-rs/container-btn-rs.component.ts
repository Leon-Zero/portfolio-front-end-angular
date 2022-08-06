import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { BtnR } from 'src/assets/data/Data';
import { Subscription } from 'rxjs'; 


@Component({
  selector: 'app-container-btn-rs',
  templateUrl: './container-btn-rs.component.html',
  styleUrls: ['./container-btn-rs.component.css']
})
export class ContainerBtnRSComponent implements OnInit {

  suscription: Subscription = new Subscription;
  socialList:any;
  datos:Object=[]

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.getData();
    this.suscription = this.datosPortfolio.refresh$.subscribe(()=>{
    this.getData();
    }) 
  }
  getData(){
    this.datosPortfolio.obtenerBtn().subscribe(data =>{console.log(data);
      this.socialList=data;
    });
  }
  onDelete(datosPortfolio_id: BtnR){
    this.datosPortfolio.DeleteBtn(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();})
    }
  onEdit(datosPortfolio_id: BtnR){
      this.datosPortfolio.IdBtn(datosPortfolio_id).subscribe((data)=>{
        this.datos = data;
        console.log(this.datos);
      })
     }
}