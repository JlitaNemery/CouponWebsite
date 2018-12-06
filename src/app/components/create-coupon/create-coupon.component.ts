import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Coupon } from '../../models/Coupon';
import { Err } from '../../models/Error';

@Component({
  selector: 'createCoupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent  {

    public couponId: number;
    public coupon:Coupon = new Coupon();
    private err: Err;

  constructor(private companyService:CompanyService) {
      this.companyService = companyService;
   }

public createCoupon(): void{
    let observable = this.companyService.createCoupon(this.coupon);

    observable.subscribe(createdCoupon =>{
         this.coupon = createdCoupon
         alert("created coupon, paid 100 sheckels")
    },err=>{
        this.err=err;
        console.log(this.err.error);
        var errorString = JSON.stringify(this.err.error);
        alert(errorString.replace('"','').replace('"',''));
        });
}

}
