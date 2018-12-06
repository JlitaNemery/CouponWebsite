import { Component} from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Company } from '../../models/Company';
import { Err } from '../../models/Error';
@Component({
  selector: 'updateCompany',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent {

    public company:Company = new Company();
    public tempCompanyId:number;
    public id:number;
    private err:Err;

  constructor(private adminService:AdminService) {
      this.adminService = adminService;
   }

   public updateCompany(): void{
    let observable = this.adminService.updateCompany(this.company, this.id);
    observable.subscribe(obCoupon => {
        this.company = obCoupon
    }, err =>{
        this.err=err;
        console.log(this.err.error);
        var errorString = JSON.stringify(this.err.error);
        alert(errorString.replace('"','').replace('"',''));

    });
  }

  public setCompanyId(id:number):void{
    this.id = id;
  }
}
