import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-check',
  templateUrl: './login-check.component.html',
  styleUrls: ['./login-check.component.css']
})
export class LoginCheckComponent implements OnInit {

  userName: string;
  constructor() { }

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName');
  }
}
