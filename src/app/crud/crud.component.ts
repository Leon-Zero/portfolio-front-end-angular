import { Component, OnInit } from '@angular/core';
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
  stylesheet = document.documentElement.style;  
  statusNew: boolean = false 
  statusEdit: boolean = false
  statusDelete: boolean = false

  activar_delete(){
    const display3 = getComputedStyle(document.documentElement).getPropertyValue("--display-3");  
    const display4 = getComputedStyle(document.documentElement).getPropertyValue("--display-4");  
    if (this.statusEdit){
      this.activar_edit();
    }
    else if (this.statusNew){
      this.activar_new();
    }
    this.stylesheet.setProperty("--display-3", display4);
    this.stylesheet.setProperty("--display-4", display3);
    this.statusDelete = !this.statusDelete;
  }
  activar_new(){
    const display5 = getComputedStyle(document.documentElement).getPropertyValue("--display-5");   
    const display6 = getComputedStyle(document.documentElement).getPropertyValue("--display-6");
    if (this.statusDelete){
      this.activar_delete();
    }
    else if (this.statusEdit){
      this.activar_edit();
    }
      this.stylesheet.setProperty("--display-5", display6);
      this.stylesheet.setProperty("--display-6", display5);
      this.statusNew = !this.statusNew;
    }

  activar_edit(){
    const display7 = getComputedStyle(document.documentElement).getPropertyValue("--display-7");
    const display8 = getComputedStyle(document.documentElement).getPropertyValue("--display-8");
    const display5 = getComputedStyle(document.documentElement).getPropertyValue("--display-5");   
    const display6 = getComputedStyle(document.documentElement).getPropertyValue("--display-6");
    if (this.statusDelete) {
      this.activar_delete();      
    }
    else if (!this.statusNew){
    this.stylesheet.setProperty("--display-5", display6);
    this.stylesheet.setProperty("--display-6", display5);
    }
    this.stylesheet.setProperty("--display-7", display8);
    this.stylesheet.setProperty("--display-8", display7);
    this.statusEdit = !this.statusEdit;
  }
}

