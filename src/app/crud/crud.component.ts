import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SkillSoft } from 'src/assets/data/Data';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
@Input() datos: any;
@Output() onDeleteDatos: EventEmitter<SkillSoft> = new EventEmitter
  constructor(private datosPortfolio:PortfolioService) { }
  public softList: any = [];

  ngOnInit(): void {
  }
  onDelete(datos:SkillSoft){
    this.onDeleteDatos.emit(datos)
  }
}
