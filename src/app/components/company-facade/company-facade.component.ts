import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Coupon} from '../../models/Coupon';
import { Err } from '../../models/Error';
import { Router } from '@angular/router';
import { GeneralIncome } from 'src/app/models/income/GeneralIncome';

@Component({
  selector: 'company-facade',
  templateUrl: './company-facade.component.html',
  styleUrls: ['./company-facade.component.css']
})
export class CompanyFacadeComponent {
    ngOnInit(): void {
        let user = localStorage.getItem('user');
        if(user != "COMPANY"){
            this.router.navigate(["/login"]);
        }
    }

    private companyService: CompanyService;
    public allCoupons: Coupon[];
    public id: number;
    public maxPrice: number;
    public category: string;
    public coupon: Coupon;
    private err: Err;
    private companyIncome: number;
    public allIncomes: GeneralIncome[];

  constructor(companyService: CompanyService, private router:Router) {
      this.companyService = companyService;
   }


  public removeCoupon(id:number):void{
    if(id==undefined){
        return;
    }
    let observable = this.companyService.removeCoupon(id);
    observable.subscribe(coupon =>{
        this.getAllCoupons();
    
    }, err =>{
        this.err=err;
        console.log(this.err.error);
        var errorString = JSON.stringify(this.err.error);
        alert(errorString.replace('"','').replace('"',''));
    });   
  }

  public getCoupon(couponId:number):void{
    if(couponId==undefined){
        return;
    }
    this.allCoupons=[];
    let observable = this.companyService.getCoupon(couponId);
    observable.subscribe(obCoupon =>{
        this.allCoupons.push(obCoupon)
     
    }, err =>{
        this.err=err;
        console.log(this.err.error);
        var errorString = JSON.stringify(this.err.error);
          alert(errorString.replace('"','').replace('"',''));
    });    
  }

  public getAllCoupons():void{
        
    let observable = this.companyService.getAllCoupons();
    observable.subscribe(coupons => {
        this.allCoupons = coupons;
    }, err =>{
        this.err=err;
        console.log(this.err.error);
        var errorString = JSON.stringify(this.err.error);
        alert(errorString.replace('"','').replace('"',''));
    });
}

  public getCompanyCouponsByPrice(price:number): void{
    if(price==undefined){
        return;
    }
    let observable = this.companyService.getCouponsByPrice(price);
    observable.subscribe(coupons => {
        this.allCoupons = coupons;
    }, err =>{
        this.err=err;
        console.log(this.err.error);
        var errorString = JSON.stringify(this.err.error);
        alert(errorString.replace('"','').replace('"',''));
    });
}


  public getCompanyCouponsByCategory(category:string): void{
    if(category==undefined){
        return;
    }
    let observable = this.companyService.getCouponsByCategory(category);
    observable.subscribe(coupons => {
        this.allCoupons = coupons;
    }, err =>{
        this.err=err;
        console.log(this.err.error);
        var errorString = JSON.stringify(this.err.error);
        alert(errorString.replace('"','').replace('"',''));
    });
  } 
  
  public getCompanyIncome(): void{
    let observable = this.companyService.getIncome();
    observable.subscribe(incomes => {
        this.companyIncome = incomes;
    }, err =>{
        this.err=err;
        console.log(this.err.error);
        var errorString = JSON.stringify(this.err.error);
        alert(errorString.replace('"','').replace('"',''));
    });
  } 

  public getCompanyIncomeArray(): void{
    let observable = this.companyService.getCompanyIncomeArray();
    observable.subscribe(incomes => {
        this.allIncomes = incomes;
    }, err =>{
        this.err=err;
        console.log(this.err.error);
        var errorString = JSON.stringify(this.err.error);
        alert(errorString.replace('"','').replace('"',''));
    });
  } 


}

