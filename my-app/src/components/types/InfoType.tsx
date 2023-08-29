export interface Condition {
    text: string;
    icon: string;
}



export interface Day {
    avgtemp_c?: number;
    avghumidity: number;
    condition?: Condition;
}

export interface Hour {
    condition?: Condition;
    temp_c?: number;
}





export  interface Info {
    name?: string;
    temp_c?: number;
    humidity?: number;
    wind_kph?: number;
    pressure_mb?:number;
    feelslike_c?: number;
    day?: Day;
    hour?: Hour[];
    date?: string;
    condition?: Condition;
}

