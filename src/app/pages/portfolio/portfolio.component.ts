import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private tokenService: TokenService) { }
  userName: string = "";
  userInvitado: boolean = false;

  ngOnInit(): void {
    this.userName = this.tokenService.getUserName();
    if (this.userName === "test1234") {
      this.userInvitado = true;      
    };
  }

}
