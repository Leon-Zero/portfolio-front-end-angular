import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { LoginUsuario } from 'src/assets/data/login-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel = new LoginUsuario("","");

  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  roles: string[] = [];
  errMsj!: string;


  constructor(private tokenService: TokenService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

 onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.loginModel.nombreUsuario, this.loginModel.password);
   // console.log(this.loginUsuario);
    this.authService.login(this.loginUsuario).subscribe(data => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['portfolio']);
    }, 
      err => {
      this.isLogged = false;
      this.isLoginFail = true;
      this.errMsj = err.error.message;
      //console.log(this.errMsj)
      });
  }
}
