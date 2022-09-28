import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBannerComponent } from './componentes/header/header-banner/header-banner.component';
import { BtnAPComponent } from './componentes/header/btn-ap/btn-ap.component';
import { LogoAPComponent } from './componentes/header/logo-ap/logo-ap.component';
import { TitleComponent } from './componentes/header/title/title.component';
import { NavbarStickyComponent } from './componentes/navbar/navbar-sticky/navbar-sticky.component';
import { ContainerBtnRSComponent } from './reusables/container-btn-rs/container-btn-rs.component';
import { NightModeComponent } from './componentes/navbar/night-mode/night-mode.component';
import { AboutMeComponent } from './componentes/about-me/about-me/about-me.component';
import { TopBtnComponent } from './reusables/top-btn/top-btn.component';
import { ExperienciaLaboralComponent } from './componentes/secciones/experiencia-laboral/experiencia-laboral.component';
import { InfoAcademicaComponent } from './componentes/secciones/info-academica/info-academica.component';
import { TitleLaboralComponent } from './componentes/secciones/experiencia-laboral/title-laboral/title-laboral.component';
import { TitleAcademicaComponent } from './componentes/secciones/info-academica/title-academica/title-academica.component';
import { SkillComponent } from './componentes/secciones/skill/skill/skill.component';
import { LanguageComponent } from './componentes/secciones/skill/language/language.component';
import { ProgramingComponent } from './componentes/secciones/skill/programing/programing.component';
import { ProgramsComponent } from './componentes/secciones//skill/programs/programs.component';
import { SoftComponent } from './componentes/secciones//skill/soft/soft.component';
import { TitleSkillComponent } from './componentes/secciones//skill/skill/title-skill/title-skill.component';
import { ProjectsComponent } from './componentes/secciones//projects/projects.component';
import { TitleProjectsComponent } from './componentes/secciones//projects/title-projects/title-projects.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CrudComponent } from './reusables/crud/crud.component';
import { OffCanvasComponent } from './componentes/navbar/off-canvas/off-canvas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './reusables/crud/delete/delete.component';
import { FormProgramingComponent } from './reactiveForm/form-programing/form-programing.component';
import { FormLenguaComponent } from './reactiveForm/form-lengua/form-lengua.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderBannerComponent,
    BtnAPComponent,
    LogoAPComponent,
    TitleComponent,
    NavbarStickyComponent,
    ContainerBtnRSComponent,
    NightModeComponent,
    AboutMeComponent,
    TopBtnComponent,
    ExperienciaLaboralComponent,
    InfoAcademicaComponent,
    TitleLaboralComponent,
    TitleAcademicaComponent,
    SkillComponent,
    LanguageComponent,
    ProgramingComponent,
    ProgramsComponent,
    SoftComponent,
    TitleSkillComponent,
    ProjectsComponent,
    TitleProjectsComponent,
    FooterComponent,
    CrudComponent,
    OffCanvasComponent,
    DeleteComponent,
    FormProgramingComponent,
    FormLenguaComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }