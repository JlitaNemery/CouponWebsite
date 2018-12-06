import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-customer',
  templateUrl: './one-customer.component.html',
  styleUrls: ['./one-customer.component.css']
})
export class OneCustomerComponent implements OnInit {

  public customer:Customer;
  private adminService:AdminService;
  private activatedRoute:ActivatedRoute;

  constructor(adminService:AdminService, activatedRoute:ActivatedRoute) {
      this.adminService = adminService;
      this.activatedRoute = activatedRoute;
   }

  ngOnInit() {
    let id = parseInt(this.activatedRoute.snapshot.params["id"]);
    let observable = this.adminService.getCustomer(id);
    observable.subscribe(ObCustomer => this.customer = ObCustomer);
  }

}
