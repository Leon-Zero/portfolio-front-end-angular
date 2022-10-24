import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BtnR } from 'src/assets/data/Data';

@Injectable({
  providedIn: 'root'
})
export class BtnRsService {

  private _refresh$ = new Subject<void>();
  private btnUrl= 'https://portfolio-leonardo-hidalgo.herokuapp.com/btnrs';

  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }
  obtenerBtn():Observable<BtnR[]>{
    return this.http.get<BtnR[]>(this.btnUrl)
  }
  SaveBtn(data:Object):Observable<BtnR>{
    console.log(data);
    return this.http.post<BtnR>(this.btnUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  IdBtn(id: number): Observable<BtnR>{
    return this.http.get<BtnR>(`${this.btnUrl}/${id}`);
  }
  UpdateBtn(id: number, data:Object): Observable<BtnR>{
   return this.http.put<BtnR>(`${this.btnUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  DeleteBtn(id: number){
    return this.http.delete(`${this.btnUrl}/${id}`)
  }  
}
