import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable, pipe, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import {Academica, BtnR, Datum, ExtraCurricular, Job, Portfolio, Skill, SkillSoft} from 'src/assets/data/Data';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private _refresh$ = new Subject<void>();
  private dataUrl = 'http://localhost:8080/datos'
  private academicaUrl= 'http://localhost:8080/academica'
  private extraUrl= 'http://localhost:8080/extraCurricular'
  private btnUrl= 'http://localhost:8080/btnrs'
  private jobUrl= 'http://localhost:8080/jobs'
  private programingUrl= 'http://localhost:8080/programacion'
  private lenguageUrl= 'http://localhost:8080/idioma'
  private programUrl= 'http://localhost:8080/programas'
  private softUrl= 'http://localhost:8080/soft'

  constructor(private http:HttpClient) { }
  // metodos get 

  obtenerData():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.dataUrl)
  }
  obtenerAcademica():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.academicaUrl)
  }
  obtenerExtra():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.extraUrl)
  }
  obtenerBtn():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.btnUrl)
  }
  obtenerJob():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.jobUrl)
  }
  obtenerPrograming():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.programingUrl)
  }
  obtenerLengua():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.lenguageUrl)
  }
  obtenerProgram():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.programUrl)
  }
  obtenerSoft():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.softUrl)
  }

  //metodos delete json-server
  // -------------

  DeleteSoft(id:SkillSoft){
    return this.http.delete(`${this.softUrl}/${id}`)
  }
  DeleteProgram(id:Skill){
    return this.http.delete(`${this.programUrl}/${id}`)
  }
  DeletePrograming(id:Skill){
    return this.http.delete(`${this.programingUrl}/${id}`)
  }
  DeleteLenguage(id:Skill){
    return this.http.delete(`${this.lenguageUrl}/${id}`)
  }
  DeleteAcademica(id:Academica){
    return this.http.delete(`${this.academicaUrl}/${id}`)
  }
  DeleteExtra(id:ExtraCurricular){
    return this.http.delete(`${this.extraUrl}/${id}`)
  }
  DeleteJob(id:Job){
    return this.http.delete(`${this.jobUrl}/${id}`)
  }
  DeleteBtn(id:BtnR){
    return this.http.delete(`${this.btnUrl}/${id}`)
  }

  //metodos Post y 
  // observable refresh
  get refresh$(){
    return this._refresh$;
  }
  SavePrograming(data:Object):Observable<Skill>{
    console.log(data);
    return this.http.post<Skill>(this.programingUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  SaveLengua(data:Object):Observable<Skill>{
    console.log(data);
    return this.http.post<Skill>(this.lenguageUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  SaveProgram(data:Object):Observable<Skill>{
    console.log(data);
    return this.http.post<Skill>(this.programUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  SaveSoft(data:Object):Observable<SkillSoft>{
    console.log(data);
    return this.http.post<SkillSoft>(this.softUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  SaveJob(data:Object):Observable<Job>{
    console.log(data);
    return this.http.post<Job>(this.jobUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  SaveAcademica(data:Object):Observable<Academica>{
    console.log(data);
    return this.http.post<Academica>(this.academicaUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  SaveExtra(data:Object):Observable<ExtraCurricular>{
    console.log(data);
    return this.http.post<ExtraCurricular>(this.extraUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  SaveBtn(data:Object):Observable<BtnR>{
    console.log(data);
    return this.http.post<BtnR>(this.btnUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }

  //metodo put + 
  // obtener id
  IdSoft(id:SkillSoft): Observable<Object>{
    return this.http.get(`${this.softUrl}/${id}`);
  }
  UpdateSoft(id: string, data:Object ){
   return this.http.put(`${this.softUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  IdPrograming(id:Skill): Observable<Object>{
    return this.http.get(`${this.programingUrl}/${id}`);
  }
  UpdatePrograming(id: string, data:Object ){
   return this.http.put(`${this.programingUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  IdLengua(id:Skill): Observable<Object>{
    return this.http.get(`${this.lenguageUrl}/${id}`);
  }
  UpdateLengua(id: string, data:Object ){
   return this.http.put(`${this.lenguageUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  IdProgram(id:Skill): Observable<Object>{
    return this.http.get(`${this.programUrl}/${id}`);
  }
  UpdateProgram(id: string, data:Object ){
   return this.http.put(`${this.programUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  IdJob(id:Job): Observable<Object>{
    return this.http.get(`${this.jobUrl}/${id}`);
  }
  UpdateJob(id: string, data:Object ){
   return this.http.put(`${this.jobUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  IdAcademica(id:Academica): Observable<Object>{
    return this.http.get(`${this.academicaUrl}/${id}`);
  }
  UpdateAcademica(id: string, data:Object ){
   return this.http.put(`${this.academicaUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  IdExtra(id:ExtraCurricular): Observable<Object>{
    return this.http.get(`${this.extraUrl}/${id}`);
  }
  UpdateExtra(id: string, data:Object ){
   return this.http.put(`${this.extraUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  IdBtn(id:BtnR): Observable<Object>{
    return this.http.get(`${this.btnUrl}/${id}`);
  }
  UpdateBtn(id: string, data:Object ){
   return this.http.put(`${this.btnUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  IdData(id:Datum): Observable<Object>{
    return this.http.get(`${this.dataUrl}/${id}`);
  }
  UpdateData(id: string, data:Object ){
   return this.http.put(`${this.dataUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
}
