import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
  
})
export class Login2Component implements OnInit {

  email: string = 'email@example.com';
  password: string = '1234';

  constructor() { }

  ngOnInit(): void {
  }

}
