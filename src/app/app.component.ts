import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_project-main';

  chartOption: EChartsOption;

  cities: City[];

  selectedCity: City;

  constructor(){
    this.chartOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome',     code: 'RM'},
      {name: 'London',   code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris',    code: 'PRS'}
  ];
  this.selectedCity = this.cities[0]
  }
}
