export class KeyValuePair {
    constructor(
        public key:number,
        public value:string ) {
    }
}

export class Statistic {
    constructor(
        public type:StatisticType,
        public target:number) {
    }
}

export const enum StatisticType {
    JOBS_BY_CITY
}

export class Filter {
    constructor(
        public type:FilterType,
        public key:string,
        public value:string ) {
    }
}

export interface IFilterType { 
    FILTER_KEY: string;
}

export const enum FilterType {
    CONTAINS,
    MATCHES
};