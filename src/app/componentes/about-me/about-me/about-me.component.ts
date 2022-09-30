import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'; 
import { DatosService } from 'src/app/servicios/portfolio-service/datos.service';
import { Datum } from 'src/assets/data/Data';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']})
  
export class AboutMeComponent implements OnInit {
  
  suscription: Subscription = new Subscription;
  miPortfolio: Datum[] = [];
  datos:Object=[]
  displayEdit: boolean=false

  constructor(private datosPortfolio: DatosService) { }

  ngOnInit(): void {
    this.getData();
    this.suscription = this.datosPortfolio.refresh$.subscribe(()=>{
    this.getData();})
  }
  getData(){
    this.datosPortfolio.obtenerData().subscribe(data =>{console.log(data);
      this.miPortfolio=data;
    }); 
  }
  onDisplayEdit( active:boolean){
    if (active) {
      this.displayEdit = true
    }
    else {
      this.displayEdit = false
    }
  }
  onEdit(datosPortfolio_id: number){
    this.datosPortfolio.IdData(datosPortfolio_id).subscribe((data)=>{
      this.datos = data;
      console.log(this.datos);
    })
   }
}
