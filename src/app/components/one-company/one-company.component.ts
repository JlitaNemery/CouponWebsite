import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/Company';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-company',
  templateUrl: './one-company.component.html',
  styleUrls: ['./one-company.component.css']
})
export class OneCompanyComponent implements OnInit {

    public company:Company;
    private adminService:AdminService;
    private activatedRoute:ActivatedRoute;

  constructor(adminService:AdminService, activatedRoute:ActivatedRoute) {
      this.adminService = adminService;
      this.activatedRoute = activatedRoute;
   }

   ngOnInit() {
    let id = parseInt(this.activatedRoute.snapshot.params["id"]);
    let observable = this.adminService.getCompany(id);
    observable.subscribe(ObCompany => this.company = ObCompany);
  }

}
