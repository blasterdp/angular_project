import { Component, OnInit, ViewChild } from '@angular/core';
import dayGrid from "@fullcalendar/daygrid";
import timeGrid from "@fullcalendar/timegrid";
import interaction from "@fullcalendar/interaction";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @ViewChild ('calendar') calendarComponent: any;
  events: any[] = [
    {
      title: 'Event 1',
      start: '2022-07-10 10:10:00',
      end:   '2022-07-10 10:20:00',
      color: '#ff0000',
      textColor: '#ffffff',
      borderColor: '#000000',
      borderWidth: 1,
      allDay: false,
      editable: true, 
      draggable: true,
      resizable: true,
    },
  ];
  options: any = {
    selectable: true,
    editable: true,
    eventLimit: false,
    defaultDate: new Date(),
    dateClick: this.handleDateClick.bind(this), 
    select: function(info:any) {
      console.log('selected ' + info.startStr + ' to ' + info.endStr);
    },
    header: {
      left: 'prev,today,next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: this.events,
    plugins: [dayGrid, timeGrid, interaction],
  };
  constructor() { }

  ngOnInit(): void {
  }

  handleDateClick(arg:any) {
    console.log('date click! ' + arg.dateStr)
    
    
  }

}
