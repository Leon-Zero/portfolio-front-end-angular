import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBannerComponent } from './componentes/header-banner/header-banner.component';
import { BtnAPComponent } from './reusables/btn-ap/btn-ap.component';
import { NavbarStickyComponent } from './componentes/navbar/navbar-sticky/navbar-sticky.component';
import { ContainerBtnRSComponent } from './reusables/container-btn-rs/container-btn-rs.component';
import { NightModeComponent } from './componentes/navbar/night-mode/night-mode.component';
import { AboutMeComponent } from './componentes/about-me/about-me/about-me.component';
import { TopBtnComponent } from './reusables/top-btn/top-btn.component';
import { ExperienciaLaboralComponent } from './componentes/secciones/experiencia-laboral/experiencia-laboral.component';
import { InfoAcademicaComponent } from './componentes/secciones/info-academica/info-academica.component';
import { SkillComponent } from './componentes/secciones/skill/skill/skill.component';
import { ProgramingComponent } from './componentes/secciones/skill/programing/programing.component';
import { ProgramsComponent } from './componentes/secciones//skill/programs/programs.component';
import { SoftComponent } from './componentes/secciones//skill/soft/soft.component';
import { ProjectsComponent } from './componentes/secciones//projects/projects.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CrudComponent } from './reusables/crud/crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './reusables/crud/delete/delete.component';
import { FormProgramingComponent } from './reactiveForm/form-programing/form-programing.component';
import { FormProgramComponent } from './reactiveForm/form-program/form-program.component';
import { FormSoftComponent } from './reactiveForm/form-soft/form-soft.component';
import { FormJobsComponent } from './reactiveForm/form-jobs/form-jobs.component';
import { FormAcademicaComponent } from './reactiveForm/form-academica/form-academica.component';
import { FormExtraComponent } from './reactiveForm/form-extra/form-extra.component';
import { FormBtnComponent } from './reactiveForm/form-btn/form-btn.component';
import { EditComponent } from './reusables/crud/edit/edit.component';
import { FormAboutMeComponent } from './reactiveForm/form-about-me/form-about-me.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { interceptorProvider } from './servicios/interceptor.service';
import { FormContactoComponent } from './reactiveForm/form-contacto/form-contacto.component';
import { FormProyectoComponent } from './reactiveForm/form-proyecto/form-proyecto.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBannerComponent,
    BtnAPComponent,
    NavbarStickyComponent,
    ContainerBtnRSComponent,
    NightModeComponent,
    AboutMeComponent,
    TopBtnComponent,
    ExperienciaLaboralComponent,
    InfoAcademicaComponent,
    SkillComponent,
    ProgramingComponent,
    ProgramsComponent,
    SoftComponent,
    ProjectsComponent,
    FooterComponent,
    CrudComponent,
    DeleteComponent,
    FormProgramingComponent,
    FormProgramComponent,
    FormSoftComponent,
    FormJobsComponent,
    FormAcademicaComponent,
    FormExtraComponent,
    FormBtnComponent,
    EditComponent,
    FormAboutMeComponent,
    PortfolioComponent,
    LoginComponent,
    PageNotFoundComponent,
    FormContactoComponent,
    FormProyectoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }