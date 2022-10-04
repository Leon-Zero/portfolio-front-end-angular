import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  addClass: string ="card_item-1"

  ngOnInit(): void {  }

  setClasses(id: string){
    this.addClass = id;
    console.log(this.addClass)
  }
}
