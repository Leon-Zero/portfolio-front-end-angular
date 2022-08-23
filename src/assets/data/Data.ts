export interface Portfolio {
    datos:           Datum[];
    academica:       Academica[];
    extracurricular: ExtraCurricular[];
    btnrs:           BtnR[];
    jobs:            Job[];
    programacion:    Skill[];
    idioma:          Skill[];
    programas:       Skill[];
    soft:            SkillSoft[];
}

export interface Academica {
    titulo_tag: string;
    instituto: string;
    logo:      string;
    carrera:   string;
    estado:    string;
    ingreso:   string;
    id:        number;
    datos_id:  number;
}

export interface BtnR {
    id:        number;
    red_social: string;
    btn:       string;
    url:       string;
    color:     string;
    datos_id:  number;
}

export interface Datum {
    id:        number;
    title_name: string;
    name:      string;
    ubicacion: string;
    school:    string;
    perfil:    string;
}

export interface ExtraCurricular {
    id:        number;
    tipo:      string;
    actividad: string;
    datos_id:  number;
}

export interface Job {
    id:            number;
    job:           string;
    cargo:         string;
    funciones:     string;
    ingreso_salida: string;
    contacto:      string;
    datos_id:  number;
}

export interface Skill {
    id:         number;
    tag:        string;
    porcentaje: number;
    color:      string;
    datos_id:  number;
}

export interface SkillSoft {
    id:         number;
    tag:        string;
    modal:      string;
    beneficio:  string;
    porcentaje: number;
    datos_id:  number;
}
