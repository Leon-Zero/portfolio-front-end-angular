import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBannerComponent } from './header/header-banner/header-banner.component';
import { BtnAPComponent } from './header/btn-ap/btn-ap.component';
import { LogoAPComponent } from './header/logo-ap/logo-ap.component';
import { TitleComponent } from './header/title/title.component';
import { NavbarStickyComponent } from './navbar/navbar-sticky/navbar-sticky.component';
import { DropDownComponent } from './navbar/drop-down/drop-down.component';
import { ContainerBtnRSComponent } from './navbar/container-btn-rs/container-btn-rs.component';
import { NightModeComponent } from './navbar/night-mode/night-mode.component';
import { AboutMeComponent } from './about-me/about-me/about-me.component';
import { TopBtnComponent } from './top-btn/top-btn.component';
import { ExperienciaLaboralComponent } from './secciones/experiencia-laboral/experiencia-laboral.component';
import { InfoAcademicaComponent } from './secciones/info-academica/info-academica.component';
import { TitleLaboralComponent } from './secciones/experiencia-laboral/title-laboral/title-laboral.component';
import { TitleAcademicaComponent } from './secciones/info-academica/title-academica/title-academica.component';
import { SkillComponent } from './skill/skill/skill.component';
import { LanguageComponent } from './skill/language/language.component';
import { ProgramingComponent } from './skill/programing/programing.component';
import { ProgramsComponent } from './skill/programs/programs.component';
import { SoftComponent } from './skill/soft/soft.component';
import { TitleSkillComponent } from './skill/skill/title-skill/title-skill.component';
import { ProjectsComponent } from './projects/projects.component';
import { TitleProjectsComponent } from './projects/title-projects/title-projects.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBannerComponent,
    BtnAPComponent,
    LogoAPComponent,
    TitleComponent,
    NavbarStickyComponent,
    DropDownComponent,
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
