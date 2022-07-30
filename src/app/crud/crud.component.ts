import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SkillSoft } from 'src/assets/data/Data';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {}
  activar_delete(){
    const stylesheet = document.documentElement.style;  
    const display3 = getComputedStyle(document.documentElement).getPropertyValue("--display-3");  
    const display4 = getComputedStyle(document.documentElement).getPropertyValue("--display-4");   
    stylesheet.setProperty("--display-3", display4);
    stylesheet.setProperty("--display-4", display3);
}
}

