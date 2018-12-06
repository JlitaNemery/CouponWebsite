import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Coupon } from '../../models/Coupon';
import { Err } from '../../models/Error';

@Component({
  selector: 'updateCoupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent {
    
  public coupon:Coupon = new Coupon();
  public couponId:number;
  public tempCouponId:number;
  private err:Err;
  constructor(private companyService:CompanyService) {
      this.companyService=companyService;
   }

  public updateCoupon(): void{
    if(this.couponId==undefined||this.couponId<=0){
        alert("illegal input")
        return;
    }
    let observable = this.companyService.updateCoupon(this.coupon, this.couponId);

    observable.subscribe(createdCoupon => {
        this.coupon = createdCoupon
        alert("updated coupon, paid 10 sheckels")

    }, err =>{
        this.err=err;
        console.log(this.err.error);
        var errorString = JSON.stringify(this.err.error);
        alert(errorString.replace('"','').replace('"',''));

    });
  }

  public setCouponId(tempCouponId:number): void{
    this.couponId=tempCouponId;
  }

}
