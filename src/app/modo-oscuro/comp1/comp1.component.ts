import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  textColorDia:string = '#000000';
  fondoColorDia:string = 'aliceblue';
  constructor() { }

  ngOnInit(): void {
  }

  changeModoNoche(){
    this.textColorDia = "#fff"
    this.fondoColorDia = "#000"
    document.body.classList.add('dark');
  }
  
  changeModoDia(){
    this.textColorDia = '#000000';
    this.fondoColorDia = 'aliceblue';
    
    document.body.classList.remove('dark');
  }
}
