export interface Portfolio {
    data:            Datum[];
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
    tituloTag: string;
    instituto: string;
    logo:      string;
    carrera:   string;
    estado:    string;
    ingreso:   string;
    id:        number;
}

export interface BtnR {
    id:        number;
    redSocial: string;
    btn:       string;
    url:       string;
    color:     string;
}

export interface Datum {
    id:        number;
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
    cargo:         string;
    funciones:     string;
    ingresoSalida: string;
    contacto:      string;
}

export interface Skill {
    id:         number;
    tag:        string;
    porcentaje: number;
    color:      string;
}

export interface SkillSoft {
    id:         number;
    tag:        string;
    modal:      string;
    beneficio:  string;
    porcentaje: number;
}
