import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../models/Coupon';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-one-coupon',
  templateUrl: './one-coupon.component.html',
  styleUrls: ['./one-coupon.component.css']
})
export class OneCouponComponent implements OnInit {

    public coupon: Coupon;
    private customerService: CustomerService;
    private activatedRoute: ActivatedRoute;
    
    constructor(customerService: CustomerService, activatedRoute: ActivatedRoute, private router:Router) {
      this.customerService=customerService;
      this.activatedRoute=activatedRoute;
   }

  ngOnInit() {
    let id = parseInt(this.activatedRoute.snapshot.params["id"]);
    let observable = this.customerService.getOneCoupon(id);
    observable.subscribe(ObCoupon => this.coupon = ObCoupon);
  }

  public purchaseCoupon(coupon:Coupon): void{
    let observable = this.customerService.purchaseCoupon(coupon);
        
    observable.subscribe(ObCoupon => this.coupon = ObCoupon);

    alert("coupon purchased, paid " + coupon.price +" sheckels")
    this.router.navigate(["/customer"]);
}
}
