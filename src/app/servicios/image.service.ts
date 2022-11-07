import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL, listAll } from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  public academica: string = "";
  public aboutMe: string = "";
  public card1: string = "";
  public card2: string = "";
  public card3: string = "";
  public card4: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagen/${name}/${name}`);
    uploadBytes(imgRef, file)
    .then(response => {this.getImages(name)})
      .catch(error => console.log(error)
     )
  }
  getImages(name: string){
    const uploadRef = ref(this.storage, `imagen/${name}`);
    listAll(uploadRef).then(async response => {
      if (name.includes('about_me_')) {
        console.log('acerca de mi');
        for (let item of response.items){
        this.aboutMe = await getDownloadURL(item);
        }
        console.log(this.aboutMe);
      }
      if (name.includes('academica_')) {
        console.log('Formación Academica');
        for (let item of response.items){
        this.academica = await getDownloadURL(item);
        }
        console.log(this.academica);
      }
      if (name.includes('card-1')) {
        console.log('carta 1');
        for (let item of response.items){
        this.card1 = await getDownloadURL(item);
        }
        console.log(this.card1);
      }
      if (name.includes('card-2')) {
        console.log('carta 2');
        for (let item of response.items){
        this.card2 = await getDownloadURL(item);
        }
        console.log(this.card2);
      }
      if (name.includes('card-3')) {
        console.log('carta 3');
        for (let item of response.items){
        this.card3 = await getDownloadURL(item);
        }
        console.log(this.card3);
      }
      if (name.includes('card-4')) {
        console.log('carta 4');
        for (let item of response.items){
        this.card4 = await getDownloadURL(item);
        }
        console.log(this.card4);
      }
    }
    ).catch(error => {console.log(error)});
  }
}
