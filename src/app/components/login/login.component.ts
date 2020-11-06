import { Component, OnInit } from '@angular/core';
import { Login } from "../../login";
import { LoginService } from "../../login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login();
  message: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {

  }

  loginUser() {
    //alert(JSON.stringify(this.login));
    this.loginService.login(this.login).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        let userId = data.userId;
        let userName = data.userName;
        //let obj = {id : customerId, name : customerName};
        sessionStorage.setItem('userId', String(userId));
        // sessionStorage.getItem('customerId');
        sessionStorage.setItem('userName', userName);
        this.router.navigate(['login-check']);
      }
      else {
        this.message = data.message;
      }
    })
  }
}
