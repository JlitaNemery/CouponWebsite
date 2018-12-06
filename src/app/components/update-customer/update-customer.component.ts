import { Component} from '@angular/core';
import { Customer } from '../../models/Customer';
import { AdminService } from '../../services/admin.service';
import { Err } from '../../models/Error';

@Component({
  selector: 'updateCustomer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent{

    public customerId:number;
    public tempCustomerId:number;
    public customer:Customer = new Customer();
    private err:Err;

    constructor(private adminService:AdminService) {
        this.adminService = adminService;
     }

    public updateCustomer(): void{

        let observable = this.adminService.updateCustomer(this.customer,this.customerId);
        
        observable.subscribe(updatedCustomer => {
            this.customer = updatedCustomer
        }, err =>{
            this.err=err;
            console.log(this.err.error);
            var errorString = JSON.stringify(this.err.error);
            alert(errorString.replace('"','').replace('"',''));
    
        });
    }
    public setCustomerId(tempCustomerId:number): void{
        this.customerId=tempCustomerId;
      }
}
