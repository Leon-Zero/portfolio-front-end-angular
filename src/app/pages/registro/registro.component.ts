import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { NuevoUsuario } from 'src/assets/data/nuevo-usuario';
import {timer} from 'rxjs'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registerModel = new NuevoUsuario("","","","");
  nuevoUsuario!: NuevoUsuario;
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;
  errMsj!: string;
  isLogged = false;
  registerFail = false;
  registerOk = false;
  
  constructor(private tokenService: TokenService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    let toastOk = document.getElementById('okToast') as HTMLElement;
    let toastFail = document.getElementById('errorToast') as HTMLElement;

    this.nuevoUsuario = new NuevoUsuario(this.registerModel.nombre, 
    this.registerModel.nombreUsuario,
    this.registerModel.email,
    this.registerModel.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.registerFail = false;
        this.registerOk = true;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);    
      },
      err => {
        this.registerFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      }
    );
  }
}
