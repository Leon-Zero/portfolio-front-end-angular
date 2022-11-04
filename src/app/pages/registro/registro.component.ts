import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { NuevoUsuario } from 'src/assets/data/nuevo-usuario';
import {timer} from 'rxjs'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  register= new FormGroup ({
    nombre: new FormControl(''),
    nombreUsuario: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });


  nuevoUsuario!: NuevoUsuario;
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;
  errMsj!: string;
  isLogged = false;
  registerFail = false;
  registerOk = false;
  submitted= false;
  
  constructor(private tokenService: TokenService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    const nombre = this.register.value.nombre as string;
    const nombreUsuario = this.register.value.nombreUsuario as string;
    const email = this.register.value.email as string;
    const password = this.register.value.password as string;
    this.submitted = true;

    this.nuevoUsuario = new NuevoUsuario(nombre, nombreUsuario, email, password);
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
