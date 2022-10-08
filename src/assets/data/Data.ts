export interface Portfolio {
    datos:           Datum[];
    academica:       Academica[];
    extracurricular: ExtraCurricular[];
    btnrs:           BtnR[];
    jobs:            Job[];
    programacion:    Skill[];
    programas:       Skill[];
    soft:            SkillSoft[];
    contacto:        Contacto[];
    proyecto:        Proyecto[];
}

export interface Academica {
    id:         number;
    titulo_tag: string;
    instituto:  string;
    logo:       string;
    carrera:    string;
    estado:     string;
    ingreso:    string;
}

export interface BtnR {
    id:        number;
    red_social: string;
    btn:       string;
    url:       string;
    color:     string;
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
}

export interface Job {
    id:            number;
    job:           string;
    cargo:         string;
    funciones:     string;
    ingreso_salida: string;
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

export interface Contacto {
    id:          number;
    mail:        string;
    asunto:      string;
    mensaje:     string;
}
export interface Proyecto{
    id:                     number;
    project_title:          string;
    project_text:           string;
    card_img_1:             string;
    card_icon_1:            string;
    card_title_1:           string;
    card_description_1:     string;
    color_1:                string;
    card_img_2:             string;
    card_icon_2:            string;
    card_title_2:           string;
    card_description_2:     string;
    color_2:                string;
    card_img_3:             string;
    card_icon_3:            string;
    card_title_3:           string;
    card_description_3:     string;
    color_3:                string;
    card_img_4:             string;
    card_icon_4:            string;
    card_title_4:           string;
    card_description_4:     string;
    color_4:                string;
}