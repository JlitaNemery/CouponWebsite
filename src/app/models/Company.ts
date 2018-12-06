import { Coupon } from './Coupon';

export class Company{

    public name: string;
    public email: string;
    public password: string;
    public id: number;
    public coupons: Coupon[];

    public constructor(name?: string, password?: string, email?: string, id?: number, coupons?: Coupon[]){
        this.name = name;
        this.password = password;
        this.email = email;
        this.id = id;
        this.coupons = coupons;
    }

    public toString(): string {
        return `
        Company Name: ${this.name}
        Email: ${this.email}
        Company Password: ${this.password}
        Company ID: ${this.id}
        `;
    }
}