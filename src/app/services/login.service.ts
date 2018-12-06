import { ErrorHandler, Injectable} from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, observable, throwError } from 'rxjs';
import { Login } from '../models/Login';
import { map, retry, catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
 
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})

export class LoginService  {


    public constructor(private http: HttpClient) {
    }


    public logout(): Observable<any>{

        let url = "http://localhost:8080/project_13.07/login";
        return this.http.get(url,{withCredentials:true}); 
          
    }

    // public login(login:Login): ErrorObservable<object> {
        
    //     let url = "http://localhost:8080/project_13.07/login";
        
    //     return this.http.post<Login>(url,login,{withCredentials:true})
    //     .catch(this.handleError);       
    // }


    public login(login:Login): Observable<any> {
        
        let url = "http://localhost:8080/project_13.07/login";
        
        return this.http.post<any>(url,login,{withCredentials:true});
    }



}

