import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SkillSoft } from 'src/assets/data/Data';
import {Portfolio} from 'src/assets/data/Data';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {
  softList: any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {

    this.datosPortfolio.obtenerSoft().subscribe(respuesta =>{console.log(respuesta);
      this.softList=respuesta;
    }); }
    
    onDelete(datosPortfolio_id: SkillSoft){
    this.datosPortfolio.DeleteSoft(datosPortfolio_id).subscribe((
      result)=>{
      this.ngOnInit();})
      //{console.log(result)})
    }
  /*
    onDeleteSoft(soft: SkillSoft){
    this.datosPortfolio.DeleteSoft(soft).subscribe(()=>(
      this.softList = this.softList.filter((t:any) => t.id !== soft.id)));
console.log("Delete Funciona!!")}
*/

}