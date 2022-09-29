import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-sticky',
  templateUrl: './navbar-sticky.component.html',
  styleUrls: ['./navbar-sticky.component.css']
})
export class NavbarStickyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 

   }

  goAbout(){
      document.getElementById('index-about')?.scrollIntoView({behavior: "smooth"});
    }
  goProgramacion(){
    document.getElementById('index-programing')?.scrollIntoView({behavior: "smooth"});
  }
  goProgramas(){
    document.getElementById('index-programs')?.scrollIntoView({behavior: "smooth"});
  }
  goSoft(){
    document.getElementById('index-soft')?.scrollIntoView({behavior: "smooth"});
  }
  goContacto(){
    document.getElementById('index-contacto')?.scrollIntoView({behavior: "smooth"});
  }
}


