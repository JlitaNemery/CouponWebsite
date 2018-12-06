import { Injectable } from '@angular/core';
import { Coupon } from '../models/Coupon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CompanyService{

    private httpClient: HttpClient;

    public constructor(httpClient:HttpClient){
        this.httpClient = httpClient;
      
    }

    public createCoupon(coupon:Coupon): Observable<any>{

        let url = "http://localhost:8080/project_13.07/company/coupons";

        return this.httpClient.post<any>(url,coupon,{withCredentials:true});
    }

    public removeCoupon(couponId:number): Observable<any>{

        let url = "http://localhost:8080/project_13.07/company/coupons/" + couponId;

        return this.httpClient.delete<any>(url,{withCredentials:true});
    }

    public updateCoupon(coupon:Coupon, couponId:number): Observable<any>{

        let url = "http://localhost:8080/project_13.07/company/coupons/" + couponId;

        return this.httpClient.put<any>(url,coupon,{withCredentials:true});
    }

    public getCoupon(couponId:number): Observable<any>{

        let url = "http://localhost:8080/project_13.07/company/coupons/" + couponId;

        return this.httpClient.get<any>(url,{withCredentials:true});
    }

    public getAllCoupons(): Observable<any>{

        let url = "http://localhost:8080/project_13.07/company/coupons";

        return this.httpClient.get<any>(url,{withCredentials:true});
    }

    public getCouponsByPrice(price:number): Observable<any>{

        let url = "http://localhost:8080/project_13.07/company/coupons/price/" + price;

        return this.httpClient.get<any>(url,{withCredentials:true});
    }

    public getCouponsByCategory(category:string): Observable<any>{

        let url = "http://localhost:8080/project_13.07/company/coupons/category/" + category;

        return this.httpClient.get<any>(url,{withCredentials:true});
    }

    public getIncome(): Observable<any>{

        let url = "http://localhost:8080/project_13.07/company/income" ;

        return this.httpClient.get<any>(url,{withCredentials:true});
    }

    public getCompanyIncomeArray(): Observable<any>{

        let url = "http://localhost:8080/project_13.07/company/income/array" ;

        return this.httpClient.get<any>(url,{withCredentials:true});
    }
}