import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-night-mode',
  templateUrl: './night-mode.component.html',
  styleUrls: ['./night-mode.component.css']
})
export class NightModeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const stylesheet = document.documentElement.style;  
    const toggle: any = document.querySelector(".switch__input[data-theme-toggle]"); 

    toggle.addEventListener("click", () => {  
     // obtener las variables css
     const color1 = getComputedStyle(document.documentElement).getPropertyValue("--color-1");  
     const color2 = getComputedStyle(document.documentElement).getPropertyValue("--color-2");
     const color3 = getComputedStyle(document.documentElement).getPropertyValue("--color-3");  
     const color4 = getComputedStyle(document.documentElement).getPropertyValue("--color-4"); 
     // cambiar las variables css
     stylesheet.setProperty("--color-1", color2);  
     stylesheet.setProperty("--color-2", color1);
     stylesheet.setProperty("--color-3", color4);  
     stylesheet.setProperty("--color-4", color3); 
    });  
    }
  }
