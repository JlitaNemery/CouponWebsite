export class GeneralIncome{

    public id:number;
    public name:string;
    public date:Date;
    public description:string;
    public amount:number;
    public companyId:number;
    public customerId:number;


    public constructor(id?:number, name?:string, date?:Date, description?:string, amount?:number, companyId?:number ,customerId?: number){
        this.id = id;
        this.name = name;
        this.date = date;
        this.description = description;
        this.companyId = companyId;
        this.customerId = customerId;
    }

    public toString() : string {
        return`
        id: ${this.id}
        name: ${this.name}
        date: ${this.date}
        description: ${this.description}
        companyId: ${this.companyId}
        `
    }
}