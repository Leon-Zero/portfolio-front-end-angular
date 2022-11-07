import { Component, Input, OnInit} from '@angular/core'; 
import { FormGroup, FormControl } from "@angular/forms";
import { ImageService } from 'src/app/servicios/image.service';
import { ProyectoService } from 'src/app/servicios/portfolio-service/proyecto.service';

@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css']
})
export class FormProyectoComponent implements OnInit {

  constructor(private datosPortfolio: ProyectoService,
              public imageService: ImageService) { }

  @Input() object:any=[]
  @Input() onSet:boolean = false;
  editMode: boolean = false;
  okCard1: boolean = false;
  okCard2: boolean = false;
  okCard3: boolean = false;
  okCard4: boolean = false;
  valueCard1: string = "";
  valueCard2: string = "";
  valueCard3: string = "";
  valueCard4: string = "";


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

  ngOnInit(): void {  
  }
  Set(){
    this.editMode = true;
    this.okCard1 = true;
    this.okCard2 = true;
    this.okCard3 = true;
    this.okCard4 = true;
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
    this.valueCard1 = this.addProyecto.value.card_img_1 as string;
    this.valueCard2 = this.addProyecto.value.card_img_2 as string;
    this.valueCard3 = this.addProyecto.value.card_img_3 as string;
    this.valueCard4 = this.addProyecto.value.card_img_4 as string;
    this.imageService.card1 = this.addProyecto.value.card_img_1 as string;
    this.imageService.card2 = this.addProyecto.value.card_img_2 as string;
    this.imageService.card3 = this.addProyecto.value.card_img_3 as string;
    this.imageService.card4 = this.addProyecto.value.card_img_4 as string;
  }
  SaveProyecto(){
    this.setImages();
    if (!this.editMode) {
      this.datosPortfolio.SaveProyecto(this.addProyecto.value).subscribe(
        (result)=> {
        this.clean();
        });       
    }
      else{
          this.datosPortfolio.UpdateProyecto(this.object.id, this.addProyecto.value)
          .subscribe((result)=>{
          this.editMode = false;
          this.clean();
        }) 
      }
  }
  uploadImage($event: any, card: string){
    const nameFile: string = this.addProyecto.value.project_title as string;
    const name = 'Proyecto_' + card + '_' + nameFile;
    this.imageService.uploadImage($event, name);
      if (card.includes('card-1')) {
        this.okCard1 = false;
        setTimeout(() => {
        this.valueCard1 = this.imageService.card1 as string;
        if (this.valueCard1 !== "") {
          this.okCard1 = true
        }
        }, 6000);
      }
      if (card.includes('card-2')) {
        this.okCard2 = false;
        setTimeout(() => {
          this.valueCard2 = this.imageService.card2 as string;
        if (this.valueCard2 !== "") {
          this.okCard2 = true
        }
        }, 6000);
      }
      if (card.includes('card-3')) {
        this.okCard3 = false;
        setTimeout(() => {
          this.valueCard3 = this.imageService.card3 as string;
        if (this.valueCard3 !== "") {
          this.okCard3 = true
        }
        }, 6000);
      }
      if (card.includes('card-4')) {
        this.okCard4 = false;
        setTimeout(() => {
          this.valueCard4 = this.imageService.card4 as string;
        if (this.valueCard4 !== "") {
          this.okCard4 = true
        }
        }, 6000);
      }   
  }
  setImages(){
    this.addProyecto.value.card_img_1 = this.valueCard1;
    this.addProyecto.value.card_img_2 = this.valueCard2;
    this.addProyecto.value.card_img_3 = this.valueCard3;
    this.addProyecto.value.card_img_4 = this.valueCard4;
  }
  clean(){
    this.imageService.card1 = "";
    this.imageService.card2 = "";
    this.imageService.card3 = "";
    this.imageService.card4 = "";
    this.valueCard1 = "";
    this.valueCard2 = "";
    this.valueCard3 = "";
    this.valueCard4 = "";
    this.okCard1 = false;
    this.okCard2 = false;
    this.okCard3 = false;
    this.okCard4 = false;
    this.addProyecto.reset({});
  }
}