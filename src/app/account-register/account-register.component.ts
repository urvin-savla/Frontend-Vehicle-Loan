import { Component, OnInit } from '@angular/core';
import { UserService } from '../UserService';
import { Accounts } from "../Accounts";
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})

export class AccountRegisterComponent implements OnInit{
  constructor (private service:UserService, private router:Router) { }

  userId:String;
  ngOnInit(): void 
  {
    this.userId=sessionStorage.getItem('userId');
    if(this.userId==null)
    {
      this.router.navigate(['user']);
    }
  }

  accNumber:any;
  accBankName:any;
  accIfsc:any;
  accType:any;
  salary:any;
  exisitingEmi:any;
  userEmployment:any;
  monthlySavings:any;

  registeraccount()
  {
    var accounts=new Accounts();
    accounts.accNumber=this.accNumber;
    accounts.accBankName=this.accBankName;
    accounts.accIfsc=this.accIfsc;
    accounts.accType=this.accType;
    accounts.salary=this.salary;
    accounts.exisitingEmi=this.exisitingEmi;
    accounts.userEmploymentType=this.userEmployment;
    accounts.monthlySavings=this.monthlySavings;


    this.service.registerAccount(accounts).subscribe(
      account=>{
        if(account.status=='SUCCESS')
        {
          console.log(account)
          alert("Account Details Registered!");
          this.router.navigate(['vehicle-register'])
        }
        else
        {
          alert("Account Already Exists!");
        }
    }
    )
  }
}



