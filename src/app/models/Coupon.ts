
export class Coupon{

    public id:number;
    public companyId:number;
    public category:string;
    public title:string;
    public description:string;
    public startDate:Date;
    public endDate:Date;
    public amount:number;
    public price:number;
    public image:string;

    public constructor(id?:number, companyId?:number, category?:string, title?:string, description?:string, 
        startDate?:Date, endDate?:Date, amount?:number, price?:number, image?:string){
            this.id = id;
            this.companyId = companyId;
            this.category = category;
            this.title = title;
            this.description = description;
            this.startDate = startDate;
            this.endDate = endDate;
            this.amount = amount;
            this.price = price;
            this.image = image;
    }

    public toString() : string {
        return`
        id: ${this.id}
        companyId ${this.companyId}
        category ${this.category}
        title ${this.title}
        description ${this.description}
        startDate ${this.startDate}
        endDate ${this.endDate}
        amount ${this.amount}
        price ${this.price}
        image ${this.image}
        `;
    }
}