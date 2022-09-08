import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-btn',
  templateUrl: './top-btn.component.html',
  styleUrls: ['./top-btn.component.css']
})
export class TopBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goTop(){
    document.getElementById('top-start')?.scrollIntoView({behavior: "smooth"});
  }

}
