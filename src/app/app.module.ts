import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
// import {DataTablesModule} from 'angular-datatables';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LogicsuccessComponent } from './logicsuccess/logicsuccess.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CheckeligiblityComponent } from './checkeligiblity/checkeligiblity.component';
import { CheckeligiblityuserComponent } from './checkeligiblityuser/checkeligiblityuser.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { VehicleRegisterComponent } from './vehicle-register/vehicle-register.component';
import { LoanregisterComponent } from './loanregister/loanregister.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { ViewApplicationComponent } from './view-application/view-application.component';
import { ViewRejectedComponent } from './view-rejected/view-rejected.component';
import { LogoutComponent } from './logout/logout.component';
import { LoanappsuccessComponent } from './loanappsuccess/loanappsuccess.component';
import { CheckLoanStatusComponent } from './check-loan-status/check-loan-status.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginAdminComponent,
    LoginUserComponent,
    LogicsuccessComponent,
    LoanregisterComponent,
    AdmindashboardComponent,
    CheckeligiblityComponent,
    CheckeligiblityuserComponent,
    RegistrationComponent,
    AccountRegisterComponent,
    VehicleRegisterComponent,
    ViewAllUsersComponent,
    ViewClientsComponent,
    ViewApplicationComponent,
    ViewRejectedComponent,
    LogoutComponent,
    LoanappsuccessComponent,
    CheckLoanStatusComponent,
    AboutUsComponent,
    EmiCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
