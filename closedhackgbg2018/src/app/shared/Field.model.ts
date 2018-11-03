export interface IField {
    id: string;
    namn: string;
    antal_platsannonser: number;
    antal_ledigajobb: number;
}

export interface IMatch {
    annonsId: string;
    annonsrubrik: string;
    annonsurl: string;
    anstallningstyp: string;
    arbetsplatsnamn: string;
    kommunnamn: string;
    lan: string;
    yrkesbenamning: string;
    publiceraddatum: Date;
    sista_ansokningsdag: Date;
}
