import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SkillSoft } from 'src/assets/data/Data';
import { TokenService } from 'src/app/servicios/token.service';
import { SoftService } from 'src/app/servicios/portfolio-service/soft.service';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {
  suscription: Subscription = new Subscription;
  softList: SkillSoft[]= [];
  datos:Object=[]
  displayDelete: boolean=false
  displayNew: boolean=false
  displayEdit: boolean=false
 
  
  constructor(private datosPortfolio: SoftService,
              private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.getData();
    this.suscription = this.datosPortfolio.refresh$.subscribe(()=>{
    this.getData();
    });
    if (this.tokenService.getToken()){
      this.isLogged = true;      
    } else {
      this.isLogged = false;      
    } 
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
    
  getData(){
    this.datosPortfolio.obtenerSoft().subscribe(respuesta => {
      this.softList=respuesta;
    });
  }
    onDelete(datosPortfolio_id: number){
    this.datosPortfolio.DeleteSoft(datosPortfolio_id).subscribe((
      result) => {
      this.ngOnInit();})
    }
    onEdit(datosPortfolio_id: number){
      this.datosPortfolio.IdSoft(datosPortfolio_id).subscribe((data) => {
        this.datos = data;
      })
    }
}