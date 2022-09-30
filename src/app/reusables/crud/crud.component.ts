import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  @Output() statusBtnDelete = new EventEmitter<boolean>();
  @Output() statusBtnNew = new EventEmitter<boolean>();
  @Output() statusBtnEdit = new EventEmitter<boolean>();

  constructor() {
   }

  ngOnInit(): void {}
  statusDelete: boolean = false
  statusNew: boolean= false
  statusEdit: boolean= false
  activar_delete(){
    this.statusDelete = !this.statusDelete
    this.statusBtnDelete.emit(this.statusDelete);
  }
  activar_new(){
    this.statusNew= !this.statusNew;
    this.statusBtnNew.emit(this.statusNew);

  }
  activar_edit(){
    this.statusEdit= !this.statusEdit;
    this.statusBtnEdit.emit(this.statusEdit);
  }
}

