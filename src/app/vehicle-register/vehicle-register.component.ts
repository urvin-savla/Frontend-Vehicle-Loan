import { Component, OnInit } from '@angular/core';
import {UserService} from '../UserService';
import { Vehicle } from '../vehicle';
import { Router } from "@angular/router";
import { User } from '../user';

@Component({
  selector: 'app-vehicle-register',
  templateUrl: './vehicle-register.component.html',
  styleUrls: ['./vehicle-register.component.css']
})
export class VehicleRegisterComponent implements OnInit
{
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

  VehicleId:string;
  VehicleName:string;
  VehicleModel:string;
  VehicleType:string;
  VehicleYear:number;
  VehicleColour:string;
  ExShowroomPrice:number;
  OnRoadPrice:number;

  registerVehicle() {
    var vehicle = new Vehicle();
    vehicle.vehicleId = this.VehicleId;
    vehicle.exShowroomPrice = this.ExShowroomPrice;
    vehicle.onRoadPrice = this.OnRoadPrice;
    vehicle.vehicleColour = this.VehicleColour;
    vehicle.vehicleName = this.VehicleName;
    vehicle.vehicleModel = this.VehicleModel;
    vehicle.vehicleType = this.VehicleType;
    vehicle.vehicleYear = this.VehicleYear;

    this.service.registerVehicle(vehicle).subscribe(
      vehicle=>{
        if(vehicle.status=='SUCCESS')
        {
          console.log(vehicle)
          alert("New Vehicle Registered!");
          this.router.navigate(['loan-register'])
        }
        else
        {
          alert("Vehicle Already Exists!");
        }
      }
    )
  }
}