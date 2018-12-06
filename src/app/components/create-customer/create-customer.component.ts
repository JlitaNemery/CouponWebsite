import { Component} from '@angular/core';
import { Customer } from '../../models/Customer';
import { AdminService } from '../../services/admin.service';
import { Err } from '../../models/Error';

@Component({
  selector: 'createCustomer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent{

    public customer:Customer = new Customer();
    private err: Err;
    constructor(private adminService:AdminService) {
        this.adminService = adminService;
     }

    public createCustomer(): void{

        let observable = this.adminService.createCustomer(this.customer);
        
        observable.subscribe(createdCustomer =>{

         this.customer = createdCustomer
        },err=>{
            this.err=err;
            console.log(this.err.error);
            var errorString = JSON.stringify(this.err.error);
            alert(errorString.replace('"','').replace('"',''));
        });
    }

}
