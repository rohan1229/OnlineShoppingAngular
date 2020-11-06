import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user=new User;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  register() {
    //alert(JSON.stringify(this.customer));
    this.userService.register(this.user).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        this.router.navigate(['thankyou']);
      }
      else {
        //missing code right now
      }
    })
  }
}
