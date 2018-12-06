import { Component, OnInit} from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Company } from '../../models/Company';
import { Customer } from '../../models/Customer';
import { Err } from '../../models/Error';
import { Router } from '@angular/router';
import { GeneralIncome } from 'src/app/models/income/GeneralIncome';

@Component({
  selector: 'adminFacade',
  templateUrl: './admin-facade.component.html',
  styleUrls: ['./admin-facade.component.css']
})
export class AdminFacadeComponent implements OnInit {
    ngOnInit(): void {
        let user = localStorage.getItem('user');
        if(user != "ADMINISTRATOR"){
            this.router.navigate(["/login"]);
        }
    }

    public allCompanies:Company[];
    public company:Company;
    public customer:Customer;
    public allCustomers:Customer[];
    private err:Err;
    public companyIncome:number;
    public companyIncomes: GeneralIncome[];
    public customerIncome:number;
    public customerIncomes: GeneralIncome[];
    public generalIncome:number;
    public generalIncomes: GeneralIncome[];



    constructor(private adminService:AdminService, private router:Router) {
        this.adminService = adminService;
     }

     public getAllCompanies():void{

        let observable = this.adminService.getAllCompanies();
        observable.subscribe( Companies => {
            this.allCompanies = Companies
        }, err =>{
            this.err=err;
          console.log(this.err);
          var errorString = JSON.stringify(this.err.error);
          alert(errorString.replace('"','').replace('"',''));
    
        });
     }

     public removeCompany(companyId:number): void{
        if(companyId==undefined){
            return;
        }
        let observable = this.adminService.removeCompany(companyId);
        observable.subscribe(company=>{
            this.getAllCompanies();
        }, err =>{
            this.err=err;
          console.log(this.err);
          var errorString = JSON.stringify(this.err.error);
          alert(errorString.replace('"','').replace('"',''));
    
        });
     }

     public getCompany(companyId:number): void{
        if(companyId==undefined){
            return;
        }
        let observable = this.adminService.getCompany(companyId);
        observable.subscribe(comp => {
            this.allCompanies=[];

            this.allCompanies.push(comp);
        }, err =>{
            this.err=err;
            console.log(this.err);
            var errorString = JSON.stringify(this.err.error);
            alert(errorString.replace('"','').replace('"',''));
    
        });
     }

     public getCompanyIncomeNumber(companyId:number): void{
        if(companyId==undefined){
            return;
        }
        let observable = this.adminService.getIncomeByCompany(companyId);
        observable.subscribe(number => {
            this.companyIncome=number;

        }, err =>{
            this.err=err;
            console.log(this.err);
            var errorString = JSON.stringify(this.err.error);
            alert(errorString.replace('"','').replace('"',''));
    
        });
     }
     public getCompanyIncomes(companyId:number): void{
        if(companyId==undefined){
            return;
        }
        let observable = this.adminService.getIncomeArrayByCompany(companyId);
        observable.subscribe(incomes => {
            this.companyIncomes=incomes;

        }, err =>{
            this.err=err;
            console.log(this.err);
            var errorString = JSON.stringify(this.err.error);
            alert(errorString.replace('"','').replace('"',''));
    
        });
     }
//---------------------------------------------------------------------------------------------

     public removeCustomer(customerId:number): void{
        if(customerId==undefined){
            return;
        }
        let observable = this.adminService.removeCustomer(customerId);
        observable.subscribe(done=>{
            this.allCustomers.splice(customerId-1,1).sort;
        }, err =>{
            this.err=err;
            console.log(this.err);
            var errorString = JSON.stringify(this.err.error);
            alert(errorString.replace('"','').replace('"',''));
    
        });
     }
     
     public getCustomer(customerId:number): void{
        if(customerId==undefined){
            return;
        }
        let observable = this.adminService.getCustomer(customerId);
        observable.subscribe(cust => {
            this.allCustomers=[];
            this.allCustomers.push(cust);
        }, err =>{
            this.err=err;
          console.log(this.err);
          var errorString = JSON.stringify(this.err.error);
          alert(errorString.replace('"','').replace('"',''));
    
        });
     }

     public getAllCustomers(): void{

        let observable = this.adminService.getAllCustomers();
        observable.subscribe(customers => {
            this.allCustomers=customers;
        }, err =>{
            this.err=err;
          console.log(this.err);
          var errorString = JSON.stringify(this.err.error);
          alert(errorString.replace('"','').replace('"',''));
    
        });
     }
     public getCustomerIncomeNumber(customerId:number): void{
        if(customerId==undefined){
            return;
        }
        let observable = this.adminService.getIncomeByCustomer(customerId);
        observable.subscribe(number => {
            this.customerIncome=number;

        }, err =>{
            this.err=err;
            console.log(this.err);
            var errorString = JSON.stringify(this.err.error);
            alert(errorString.replace('"','').replace('"',''));
    
        });
     }
     public getCustomerIncomes(customerId:number): void{
        if(customerId==undefined){
            return;
        }
        let observable = this.adminService.getIncomeArrayByCustomer(customerId);
        observable.subscribe(incomes => {
            this.customerIncomes=incomes;

        }, err =>{
            this.err=err;
            console.log(this.err);
            var errorString = JSON.stringify(this.err.error);
            alert(errorString.replace('"','').replace('"',''));
    
        });
     }
     //---------------------------------------------------------------------------------------------

     public getGeneralIncomeNumber(): void{
        let observable = this.adminService.getIncome();
        observable.subscribe(number => {
            this.generalIncome=number;

        }, err =>{
            this.err=err;
            console.log(this.err);
            var errorString = JSON.stringify(this.err.error);
            alert(errorString.replace('"','').replace('"',''));
    
        });
     }
     public getGeneralIncomes(): void{
        let observable = this.adminService.getIncomeArray();
        observable.subscribe(incomes => {
            this.generalIncomes=incomes;

        }, err =>{
            this.err=err;
            console.log(this.err);
            var errorString = JSON.stringify(this.err.error);
            alert(errorString.replace('"','').replace('"',''));
    
        });
     }
}
