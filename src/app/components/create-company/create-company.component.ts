import { Component} from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Company } from '../../models/Company';
import { Err } from '../../models/Error';


@Component({
  selector: 'createCompany',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent  {

    public company:Company = new Company();
    private err:Err;
    
  constructor(private adminService:AdminService) {
      this.adminService = adminService;
   }

   public createCompany(): void{

    let observable = this.adminService.createCompany(this.company);

    observable.subscribe(createdCompany => {
        this.company = createdCompany
    }, err =>{
        this.err=err;
        console.log(this.err.error);
        var errorString = JSON.stringify(this.err.error);
        alert(errorString.replace('"','').replace('"',''));
    });
   }


}
