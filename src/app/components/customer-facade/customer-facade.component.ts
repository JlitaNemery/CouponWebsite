import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Coupon} from '../../models/Coupon';
import { Err } from '../../models/Error';
import { Router } from '@angular/router';

@Component({
selector: 'customer-facade',
templateUrl: './customer-facade.component.html',
styleUrls: ['./customer-facade.component.css']
})
export class customerFacadeComponent{
ngOnInit(): void {
    let user = localStorage.getItem('user');
    if(user != "CUSTOMER"){
        this.router.navigate(["/login"]);
    }
}

public job:string;
private customerService: CustomerService;
public allCoupons: Coupon[];
public maxPrice: number;
private err:Err;

constructor(customerService: CustomerService, private router:Router) {
    this.customerService = customerService
    }

public getAllCouponsasync(): void{
        
        let observable = this.customerService.getAllCouponsasync();

        observable.subscribe(coupons => {
            this.allCoupons = coupons
        }, err =>{
            this.err=err;
            console.log(this.err.error);
            var errorString = JSON.stringify(this.err.error);
            alert(errorString.replace('"','').replace('"',''));
    
        });
        }

public getAvailableCouponsasync(): void{
        let observable = this.customerService.getAvailableCouponsasync();
    
        observable.subscribe(coupons => {
            this.allCoupons = coupons
        }, err =>{
            this.err=err;
            console.log(this.err.error);
            var errorString = JSON.stringify(this.err.error);
            alert(errorString.replace('"','').replace('"',''));
    
        });
        }


public getCouponsbyPrice(maxPrice:number): void{
    if(maxPrice==undefined){
        return;
    }
    
    let observable = this.customerService.getCouponsbyPrice(maxPrice);
        
    observable.subscribe(coupons => {
        this.allCoupons = coupons
    }, err =>{
        this.err=err;
        console.log(this.err.error);
        var errorString = JSON.stringify(this.err.error);
        alert(errorString.replace('"','').replace('"',''));

    });
    }

public getCouponsbyCategory(category:string): void{
    if(category==undefined){
        return;
    }
    let observable = this.customerService.getCouponsbyCategory(category);
        
    observable.subscribe(coupons => {
        this.allCoupons = coupons
    }, err =>{
        this.err=err;
        console.log(this.err.error);
        var errorString = JSON.stringify(this.err.error);
        alert(errorString.replace('"','').replace('"',''));

    });
    }
}


    
    
