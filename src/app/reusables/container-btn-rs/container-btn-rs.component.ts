import { Component, OnInit } from '@angular/core';
import { BtnR } from 'src/assets/data/Data';
import { Subscription } from 'rxjs';
import { BtnRsService } from 'src/app/servicios/portfolio-service/btn-rs.service';


@Component({
  selector: 'app-container-btn-rs',
  templateUrl: './container-btn-rs.component.html',
  styleUrls: ['./container-btn-rs.component.css']
})
export class ContainerBtnRSComponent implements OnInit {

  suscription: Subscription = new Subscription;
  socialList: BtnR[]= [];
  datos:Object=[]
  displayDelete: boolean=false 
  displayNew: boolean=false
  displayEdit: boolean=false

  constructor(private datosPortfolio: BtnRsService) { }

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
  onDisplayDelete( active:boolean){
    if (active) {
      this.displayDelete = true
    }
    else {
      this.displayDelete = false
    }
  }
  onDisplayNew( active:boolean){
    if (active) {
      this.displayNew = true;
    }
    else {
      this.displayNew = false
    }
    if (this.displayEdit) {
        this.displayEdit = false
      }
  }
  onDisplayEdit( active:boolean){
      if (active) {
        this.displayEdit = true
      }
      else {
        this.displayEdit = false
      }
      if (this.displayNew) {
        this.displayNew = false
      }
  }
  onDelete(datosPortfolio_id: number){
    this.datosPortfolio.DeleteBtn(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();})
    }
  onEdit(datosPortfolio_id: number){
      this.datosPortfolio.IdBtn(datosPortfolio_id).subscribe((data)=>{
        this.datos = data;
        console.log(this.datos);
      })
     }
}