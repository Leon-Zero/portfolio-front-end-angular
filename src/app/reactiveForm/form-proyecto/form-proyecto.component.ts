import { Component, Input, OnInit} from '@angular/core'; 
import { FormGroup, FormControl } from "@angular/forms";
import { ProyectoService } from 'src/app/servicios/portfolio-service/proyecto.service';

@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css']
})
export class FormProyectoComponent implements OnInit {

  constructor(private datosPortfolio: ProyectoService) { }

  @Input() object:any=[]
  @Input() onSet:boolean = false 

  addProyecto = new FormGroup ({
    id:                     new FormControl(''),
    project_title:          new FormControl(''),
    project_text:           new FormControl(''),
    card_img_1:             new FormControl(''),
    card_icon_1:            new FormControl(''),
    card_title_1:           new FormControl(''),
    card_description_1:     new FormControl(''),
    color_1:                new FormControl(''),
    card_img_2:             new FormControl(''),
    card_icon_2:            new FormControl(''),
    card_title_2:           new FormControl(''),
    card_description_2:     new FormControl(''),
    color_2:                new FormControl(''),
    card_img_3:             new FormControl(''),
    card_icon_3:            new FormControl(''),
    card_title_3:           new FormControl(''),
    card_description_3:     new FormControl(''),
    color_3:                new FormControl(''),
    card_img_4:             new FormControl(''),
    card_icon_4:            new FormControl(''),
    card_title_4:           new FormControl(''),
    card_description_4:     new FormControl(''),
    color_4:                new FormControl('')
  });

  editMode: boolean = false;

  ngOnInit(): void {  
  }
  Set(){
    this.addProyecto.setValue({
      id:                     this.object.id,
      project_title:          this.object.project_title,
      project_text:           this.object.project_text,
      card_img_1:             this.object.card_img_1,
      card_icon_1:            this.object.card_icon_1,
      card_title_1:           this.object.card_title_1,
      card_description_1:     this.object.card_description_1,
      color_1:                this.object.color_1,
      card_img_2:             this.object.card_img_2,
      card_icon_2:            this.object.card_icon_2,
      card_title_2:           this.object.card_title_2,
      card_description_2:     this.object.card_description_2,
      color_2:                this.object.color_2,
      card_img_3:             this.object.card_img_3,
      card_icon_3:            this.object.card_icon_3,
      card_title_3:           this.object.card_title_3,
      card_description_3:     this.object.card_description_3,
      color_3:                this.object.color_3,
      card_img_4:             this.object.card_img_4,
      card_icon_4:            this.object.card_icon_4,
      card_title_4:           this.object.card_title_4,
      card_description_4:     this.object.card_description_4,
      color_4:                this.object.color_4,
    });
    this.editMode=true;
  }
  SaveProyecto(){
    if (!this.editMode) {
      this.datosPortfolio.SaveProyecto(this.addProyecto.value).subscribe(
        (result)=> {
        this.addProyecto.reset({});
        });       
    }
    else {
      this.datosPortfolio.UpdateProyecto(this.object.id, this.addProyecto.value).subscribe((result)=>{
      this.addProyecto.reset({});
      this.editMode = false;
    })
    }
  }
}