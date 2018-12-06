import { Injectable } from '@angular/core';
import { Coupon } from '../models/Coupon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})

export class CustomerService{

    private httpClient: HttpClient;


    public constructor(httpClient: HttpClient, public userCookie: CookieService){
        this.httpClient = httpClient;
        
    }

    public getAvailableCouponsasync(): Observable<any>{
        let url = "http://localhost:8080/project_13.07/customer/coupons/available";
        return this.httpClient.get<any>(url,{withCredentials:true});
    }
    public getAllCouponsasync(): Observable<any>{
        let url = "http://localhost:8080/project_13.07/customer/coupons";
        return this.httpClient.get<any>(url,{withCredentials:true});
    }
    public getCouponsbyPrice(maxPrice:number): Observable<any>{
        let url = "http://localhost:8080/project_13.07/customer/coupons/price/"+maxPrice;
        return this.httpClient.get<any>(url,{withCredentials:true});
    }
    public getCouponsbyCategory(category:string): Observable<any>{
        let url = "http://localhost:8080/project_13.07/customer/coupons/category/"+category;
        return this.httpClient.get<any>(url,{withCredentials:true});
    }

    public getOneCoupon(id:number): Observable<any>{
        let url = "http://localhost:8080/project_13.07/customer/coupons/"+id;
        return this.httpClient.get<any>(url,{withCredentials:true});
    }
    public purchaseCoupon(coupon:Coupon): Observable<any>{
        let url = "http://localhost:8080/project_13.07/customer/purchase";
        return this.httpClient.post<any>(url,coupon,{withCredentials:true});
    }
}