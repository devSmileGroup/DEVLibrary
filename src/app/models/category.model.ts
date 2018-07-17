export class Category{
    constructor(
        public name: string,
        public id?:number,
        
        ){}
}
export interface Categories{
    categories: Category[]
}