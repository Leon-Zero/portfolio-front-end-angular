export interface Portfolio {
    data:            Data;
    academica:       Academica[];
    extraCurricular: ExtraCurricular[];
    btnRS:           BtnR[];
    jobs:            Job[];
    skillPrograming: Skill[];
    skillLenguage:   Skill[];
    skillPrograms:   Skill[];
    skillSoft:       SkillSoft[];
}

export interface Academica {
    id:          number;
    tituloTag:   string;
    instituto:   string;
    logo:        string;
    carrera:     string;
    estado:      string;
    estadoAnexo: string;
    ingreso:     string;
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

export interface ExtraCurricular {
    id:        number;
    tipo:      string;
    actividad: string;
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
    color:       string;
}

export interface SkillSoft {
    id:         number;
    tag:        string;
    modal:      string;
    beneficio:  string;
    porcentaje: number;
}
