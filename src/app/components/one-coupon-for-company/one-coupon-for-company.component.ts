import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../models/Coupon';
import { CompanyService } from '../../services/company.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-one-coupon-for-company',
  templateUrl: './one-coupon-for-company.component.html',
  styleUrls: ['./one-coupon-for-company.component.css']
})
export class OneCouponForCompanyComponent implements OnInit {

    public coupon: Coupon;
    private companyService: CompanyService;
    private activatedRoute: ActivatedRoute;
    
    constructor(companyService: CompanyService, activatedRoute: ActivatedRoute) {
      this.companyService=companyService;
      this.activatedRoute=activatedRoute;
   }

  ngOnInit() {
    let id = parseInt(this.activatedRoute.snapshot.params["id"]);
    let observable = this.companyService.getCoupon(id);
    observable.subscribe(ObCoupon => this.coupon = ObCoupon);
  }
}
