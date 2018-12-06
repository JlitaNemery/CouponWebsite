import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminFacadeComponent } from './components/admin-facade/admin-facade.component';
import { CompanyFacadeComponent } from './components/company-facade/company-facade.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { customerFacadeComponent } from './components/customer-facade/customer-facade.component';
import { OneCouponComponent } from './components/one-coupon/one-coupon.component';
import { OneCompanyComponent } from './components/one-company/one-company.component';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { OneCustomerComponent } from './components/one-customer/one-customer.component';
import { OneCouponForCompanyComponent} from './components/one-coupon-for-company/one-coupon-for-company.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { Page404Component } from './components/page404/page404.component';


const siteRoutes: Routes = [
    { path: "one-customer/:id", component:OneCustomerComponent},
    { path: "one-coupon/:id", component:OneCouponComponent},
    { path: "one-coupon-for-company/:id", component:OneCouponForCompanyComponent},
    { path: "one-company/:id", component:OneCompanyComponent},
    { path: "customer", component:customerFacadeComponent},
    { path: "login", component: LoginComponent },
    { path: "", redirectTo:"/login", pathMatch:"full"},
    { path: "company", component:CompanyFacadeComponent},
    { path: "admin", component:AdminFacadeComponent},    
    { path: "**", component: Page404Component }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AdminFacadeComponent,
    CompanyFacadeComponent,
    HeaderComponent,
    FooterComponent,
    customerFacadeComponent,
    OneCouponComponent,
    OneCompanyComponent,
    CreateCouponComponent,
    UpdateCouponComponent,
    CreateCompanyComponent,
    UpdateCompanyComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    OneCustomerComponent,
    OneCouponForCompanyComponent,
    ThumbnailComponent,
    Page404Component  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(siteRoutes),
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
