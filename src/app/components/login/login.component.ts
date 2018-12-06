import { Component } from '@angular/core';
import { Login } from '../../models/Login';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../../services/login.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Err } from '../../models/Error';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    public login: Login = new Login();
    public err: Err;
    constructor (private loginService: LoginService, private router:Router){
    }

        public send(): void{
            let observable = this.loginService.login(this.login);
                      
            observable.subscribe( loginUser => {
             alert("login succeed: \n" + 
            "Email: " + this.login.email + "\n" +
            "Password: " + this.login.password + "\n" +
            "Client Type: " + this.login.clientType);
            localStorage.setItem('user',this.login.clientType);
            switch(this.login.clientType){
                 case "ADMINISTRATOR" : this.router.navigate(["/admin"]);
                 break; 
                 case "COMPANY" : this.router.navigate(["/company"]);
                 break;
                 case "CUSTOMER" : this.router.navigate(["/customer"]);
                 break;
          } 
      }, err =>{
          this.err=err;
          console.log(this.err);
          var errorString = JSON.stringify(this.err.error);
          alert(errorString.replace('"','').replace('"',''));
      } );
    }

    public logout(): void {
        let observable = this.loginService.logout();
        observable.subscribe(logout=> alert("logged out"));
      }

}
