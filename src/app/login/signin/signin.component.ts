import { Component, OnInit } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  nombre: string;
  email: FormControl = new FormControl('pepe@gmail.com', [Validators.required, Validators.minLength(7)]);;
  password: FormControl = new FormControl('1234', Validators.required);

  constructor() {
    this.nombre = 'Blaster';
  }

  ngOnInit(): void {
  }

}

