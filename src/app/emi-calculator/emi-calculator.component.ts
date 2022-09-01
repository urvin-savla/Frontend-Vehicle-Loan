import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {

  amount:number=300000;
  tenure:number =2;
  interest:number=9;
  emi:number=0;
  totalinterest:number=0;
  total:number=0;
  show:boolean = false;

  valueChanged1(e) {
    this.amount = e;
}

  valueChanged2(e) {
    this.tenure = e;
  }

  valueChanged3(e) {
    this.interest = e;
  }

  calculate()
  {
  let interestby = this.interest/100;
  let monthlyRate:number = interestby/12;
  let terminmonths:number=this.tenure*12;
  let prinAmt:number=this.amount;
  let rateofInt:number=interestby/12;
  let tenofloan:number=this.tenure*12;
  let p1:number=Number(prinAmt*rateofInt);
  let p2:number=Number(Math.pow(1+rateofInt,tenofloan));
  let p3:number=Number(p2/(p2-1));
  this.emi =Number((p1*p3).toFixed(1));
  //this.emi = Number(((this.amount*monthlyRate)/(1-Math.pow(1+monthlyRate,-terminmonths))).toFixed(1));
  this.totalinterest = Number((terminmonths*this.emi - this.amount).toFixed(1));
  this.total = Number(((this.totalinterest)+Number(this.amount)).toFixed(1));
  this.show = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}