export interface Education {
    title: string;
    location: string;
    date: string;
    content: Array<string>;
    type: string;
}

export interface WorkExperience {
    society: string;
    society_link: string;
    type: string;
    date: string;
    time: string;
    content: Array<string>;
}

export interface Project {
    title: string;
    type: string;
    date: string;
    time: string;
    content: Array<string>;
    pictures_url: Array<string>;
}

export interface Infos {
    first_name: string;
    last_name: string;
    mail: string;
    phone: string;
    adress: string;
    city: string;
    zip: string;
    licence: string;
    linkedin: string;
    discord: string;
    facebook: string;
    github: string;
    instagram: string;
}