export interface HeaderLinks {
    title: string;
}

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