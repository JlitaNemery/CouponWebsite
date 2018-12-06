import { Injectable } from '@angular/core';
import { Company } from '../models/Company';
import { Customer } from '../models/Customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AdminService{

    private httpClient: HttpClient;


    public constructor(httpClient:HttpClient){
        this.httpClient = httpClient;
    }

    public createCompany(company:Company):Observable<any>{

        let url = "http://localhost:8080/project_13.07/admin/companies";
        return this.httpClient.post<any>(url,company,{withCredentials:true});
    }

    public removeCompany(companyId:number):Observable<any>{

        let url = "http://localhost:8080/project_13.07/admin/companies/" + companyId;
        return this.httpClient.delete<any>(url,{withCredentials:true});
    }

    public updateCompany(company:Company, companyId:number):Observable<any>{

        let url = "http://localhost:8080/project_13.07/admin/companies/" + companyId;
        return this.httpClient.put<any>(url,company,{withCredentials:true});
    }

    public getCompany(companyId:number):Observable<any>{

        let url = "http://localhost:8080/project_13.07/admin/companies/" + companyId;
        return this.httpClient.get<any>(url,{withCredentials:true});
    }

    public getAllCompanies():Observable<any>{

        let url = "http://localhost:8080/project_13.07/admin/companies";
        return this.httpClient.get<any>(url,{withCredentials:true});
    }
//-----------------------------------------------------------------------------------------------------------------------------------

public createCustomer(customer:Customer):Observable<any>{

    let url = "http://localhost:8080/project_13.07/admin/customers";
    return this.httpClient.post<any>(url,customer,{withCredentials:true});
}

public removeCustomer(customerId:number):Observable<any>{

    let url = "http://localhost:8080/project_13.07/admin/customers/" + customerId;
    return this.httpClient.delete<any>(url,{withCredentials:true});
}

public updateCustomer(customer:Customer, customerId:number):Observable<any>{

    let url = "http://localhost:8080/project_13.07/admin/customers/" + customerId;
    return this.httpClient.put<any>(url,customer,{withCredentials:true});
}

public getCustomer(customerId:number):Observable<any>{

    let url = "http://localhost:8080/project_13.07/admin/customers/" + customerId;
    return this.httpClient.get<any>(url,{withCredentials:true});
}

public getAllCustomers():Observable<any>{

    let url = "http://localhost:8080/project_13.07/admin/customers";
    return this.httpClient.get<any>(url,{withCredentials:true});
}

public getIncomeByCompany(companyId:number): Observable<any>{

    let url = "http://localhost:8080/project_13.07/admin/income/number/company/"+ companyId;

    return this.httpClient.get<any>(url,{withCredentials:true});
}

public getIncomeArrayByCompany(companyId:number): Observable<any>{

    let url = "http://localhost:8080/project_13.07/admin/income/company/"+ companyId;

    return this.httpClient.get<any>(url,{withCredentials:true});
}

public getIncomeByCustomer(customerId:number): Observable<any>{

    let url = "http://localhost:8080/project_13.07/admin/income/number/customer/"+ customerId;

    return this.httpClient.get<any>(url,{withCredentials:true});
}

public getIncomeArrayByCustomer(customerId:number): Observable<any>{

    let url = "http://localhost:8080/project_13.07/admin/income/customer/"+ customerId;

    return this.httpClient.get<any>(url,{withCredentials:true});
}

public getIncome(): Observable<any>{

    let url = "http://localhost:8080/project_13.07/admin/income/number";

    return this.httpClient.get<any>(url,{withCredentials:true});
}

public getIncomeArray(): Observable<any>{

    let url = "http://localhost:8080/project_13.07/admin/income";

    return this.httpClient.get<any>(url,{withCredentials:true});
}
}