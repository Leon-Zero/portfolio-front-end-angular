import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  login= new FormGroup ({
    nombreUsuario: new FormControl(''),
    password: new FormControl('')
  });

  isLogged = false;
  isLoginFail = false;
  submitted= false;
  loginUsuario!: LoginUsuario;
  roles: string[] = [];
  errMsj!: string;
  spinner: boolean = false;


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
    const nombreUsuario = this.login.value.nombreUsuario as string;
    const password = this.login.value.password as string;
    this.submitted = true;
    this.spinner = true;
    this.loginUsuario = new LoginUsuario(nombreUsuario, password);
   // console.log(this.loginUsuario);
    this.authService.login(this.loginUsuario).subscribe(data => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.submitted = false;
        this.spinner = false;
        this.router.navigate(['portfolio']);
    }, 
      err => {
      this.spinner = false;
      this.isLogged = false;
      this.isLoginFail = true;
      this.errMsj = err.error.message;
      console.log(this.errMsj)
      });
  }
}
