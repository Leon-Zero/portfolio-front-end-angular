import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactoService } from 'src/app/servicios/portfolio-service/contacto.service';
import { Contacto } from 'src/assets/data/Data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  suscription: Subscription = new Subscription;
  contactoList: Contacto[]= [];
  datos:Object=[]
  displayEdit: boolean=false

  constructor(private datosPortfolio: ContactoService) { }

  ngOnInit(): void {
    this.getData();
    this.suscription = this.datosPortfolio.refresh$.subscribe(()=>{
    this.getData();})
  }

  getData(){
    this.datosPortfolio.obtenerContacto().subscribe(respuesta => {
      //console.log(respuesta);
      this.contactoList=respuesta;
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
    this.datosPortfolio.IdContacto(datosPortfolio_id).subscribe((data)=>{
      this.datos = data;
      console.log(this.datos);
    })
   }
}
