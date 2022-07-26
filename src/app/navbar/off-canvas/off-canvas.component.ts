import { JsonpClientBackend } from '@angular/common/http';
import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-off-canvas',
  templateUrl: './off-canvas.component.html',
  styleUrls: ['./off-canvas.component.css'],
})
export class OffCanvasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const stylesheet = document.documentElement.style;  
    const btn: any = document.querySelector(".btn[data-theme-btn]");
    const btnSalir: any = document.getElementById("salir");
   
    btn.addEventListener("click", login);  
    btnSalir.addEventListener("click", salir_edition)
    
    // habilitar usuario
    function login(){  
    const user= (document.getElementById("username") as HTMLInputElement).value;
    const pass= (document.getElementById("password") as HTMLInputElement).value;
    
      if (user == "leon_zero" && pass == "tuxido2022") {
        activar_edition();
       } else { alertError('Datos invalidos, ¡Vuelve a intetar!', 'success')}
    }
    function activar_edition(){
      const display1 = getComputedStyle(document.documentElement).getPropertyValue("--display-1");  
      const display2 = getComputedStyle(document.documentElement).getPropertyValue("--display-2");   
      stylesheet.setProperty("--display-1", display2);
      stylesheet.setProperty("--display-2", display1);
      }
    function salir_edition(){
      activar_edition();      
    }



    //mensaje de alerta
    const alertPlaceholder = (document.getElementById('liveAlertPlaceholder') as Element);

    const alertError = (message: string, type: any) => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-danger d-flex" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('');
      alertPlaceholder.append(wrapper)
    }
/*
    const alertOk = (message: string, type: any) => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`
      ].join('')
    
      alertPlaceholder.append(wrapper)
    } */

 }
}