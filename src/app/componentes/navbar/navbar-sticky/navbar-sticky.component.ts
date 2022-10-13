import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-navbar-sticky',
  templateUrl: './navbar-sticky.component.html',
  styleUrls: ['./navbar-sticky.component.css']
})
export class NavbarStickyComponent implements OnInit {

  stylesheet = document.documentElement.style;
  displayEdition: boolean = false;  
  roles: string[] = [];
  isAdmin: boolean = false;

  constructor(private tokenService: TokenService,
              private router: Router) { }

ngOnInit(): void {
  this.roles = this.tokenService.getAuthorities();
  this.roles.forEach(rol =>{
    if ( rol === 'ROLE_ADMIN'){
      this.isAdmin = true;
    }});
}

  activar_edition(){
    const display1 = getComputedStyle(document.documentElement).getPropertyValue("--display-1");  
    const display2 = getComputedStyle(document.documentElement).getPropertyValue("--display-2");
    if (this.displayEdition === false) {
      this.stylesheet.setProperty("--display-1", display2);
      this.stylesheet.setProperty("--display-2", display1);
      this.displayEdition = true;
     // console.log(this.isAdmin);
    // console.log(this.roles);
    } else {
      this.displayEdition = false;
      location.reload(); 
      }
  }
  onLogOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['login']);
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
  goProyectos(){
    document.getElementById('index-proyecto')?.scrollIntoView({behavior: "smooth"});
  }
  goContacto(){
    document.getElementById('index-contacto')?.scrollIntoView({behavior: "smooth"});
  }
}


