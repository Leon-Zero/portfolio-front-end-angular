export interface Portfolio {
    data:            Data;
    academica:       Academica;
    btnRS:           BtnR[];
    jobs:            Job[];
    skillPrograming: Skill[];
    skillLenguage:   Skill[];
    skillPrograms:   Skill[];
    skillSoft:       SkillSoft[];
}

export interface Academica {
    id:        number;
    instituto: string;
    carrera:   string;
    estado:    string;
    curso:     string;
    ingreso:   string;
    extra1:    string;
    extra2:    string;
    extra2B:   string;
    extra2C:   string;
    extra3:    string;
}

export interface BtnR {
    id:        number;
    redSocial: string;
    btn:       string;
    url:       string;
}

export interface Data {
    titleName: string;
    name:      string;
    ubicacion: string;
    school:    string;
    fullStack: string;
    ap:        string;
    perfil:    string;
}

export interface Job {
    id:            number;
    job:           string;
    idTarget:      string;
    target:        string;
    idItem:        string;
    cargo:         string;
    funciones:     string;
    ingresoSalida: string;
    contacto:      string;
}

export interface Skill {
    id:         number;
    tag:        string;
    porcentaje: number;
    fill:       string;
}

export interface SkillSoft {
    id:         number;
    idTarget:   string;
    target:     string;
    tag:        string;
    modal:      string;
    beneficio:  string;
    porcentaje: number;
}
