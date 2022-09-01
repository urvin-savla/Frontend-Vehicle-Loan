import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LogicsuccessComponent } from './logicsuccess/logicsuccess.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CheckeligiblityComponent } from './checkeligiblity/checkeligiblity.component';
import { CheckeligiblityuserComponent } from './checkeligiblityuser/checkeligiblityuser.component'
import { LoanregisterComponent } from './loanregister/loanregister.component';
import { RegistrationComponent } from './registration/registration.component';
import { VehicleRegisterComponent } from './vehicle-register/vehicle-register.component';
import { AccountRegisterComponent } from './account-register/account-register.component'
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewApplicationComponent } from './view-application/view-application.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { ViewRejectedComponent } from './view-rejected/view-rejected.component';
import { LogoutComponent } from './logout/logout.component';
import { LoanappsuccessComponent } from './loanappsuccess/loanappsuccess.component';
import { CheckLoanStatusComponent } from './check-loan-status/check-loan-status.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'emicalculator', component: EmiCalculatorComponent},
  {path: 'user-dashboard', component: LogicsuccessComponent},
  {path: 'admin-dashboard', component: AdmindashboardComponent},
  {path: 'checkeligiblity', component: CheckeligiblityComponent},
  {path: 'checkeligiblityuser', component: CheckeligiblityuserComponent},
  {path: 'loan-register', component: LoanregisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'admin', component: LoginAdminComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'user', component: LoginUserComponent},
  {path: 'loanappsuccess', component: LoanappsuccessComponent},
  {path: 'vehicle-register', component: VehicleRegisterComponent},
  {path: 'account-register', component: AccountRegisterComponent},
  {path: 'view-all-user', component: ViewAllUsersComponent},
  {path: 'view-application', component: ViewApplicationComponent},
  {path: 'view-clients', component: ViewClientsComponent},
  {path: 'view-rejected', component: ViewRejectedComponent},
  {path: 'check-loan-status', component:CheckLoanStatusComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }