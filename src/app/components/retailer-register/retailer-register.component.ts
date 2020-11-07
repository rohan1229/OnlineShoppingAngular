import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerRegisterService } from "../../retailer-register.service";
import { Retailer } from "../../retailer";

@Component({
  selector: 'app-retailer-register',
  templateUrl: './retailer-register.component.html',
  styleUrls: ['./retailer-register.component.css']
})
export class RetailerRegisterComponent implements OnInit {

  retailer = new Retailer();

  constructor(private retailerRegisterService:RetailerRegisterService, private router:Router) { }

  ngOnInit() {
  }

  register(){
    this.retailerRegisterService.register(this.retailer).subscribe(data=>{
      if(data.status=='SUCCESS'){
        //alert(JSON.stringify(data));
        this.router.navigate(['retailer-login']);
      }
      else{

      }
    })
  }
}
