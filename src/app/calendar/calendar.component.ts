import { Component, OnInit, ViewChild } from '@angular/core';
import dayGrid from "@fullcalendar/daygrid";
import timeGrid from "@fullcalendar/timegrid";
import interaction from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @ViewChild('calendar') calendarComponent: any;

  events: any[] = [
    {
      title: 'Event 1',
      tooltip: 'Event 1',
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
  options: any;
  
  constructor() { 
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  ngOnInit(): void {
    this.options = {
      selectable: true,
      editable: true,
      eventLimit: false,
      defaultDate: new Date(),
      dateClick: this.handleDateClick.bind(this), 
      select: function(info:any) {
        console.log('selected ' + info.startStr + ' to ' + info.endStr);
      },
      eventClick: function(info:any) {
        console.log('clicked ' + info.event.title);
      },
      eventDrop: function(info:any) {
        console.log('event dropped ' + info.event.title);
      },
      eventResize: function(info:any) {
        console.log('event resized ' + info.event.title);
        console.log('event start ' + info.event.start);
        console.log('event end ' + info.event.end);
      },
      eventRender: function(info:any) {
        console.log('event rendered ' + info.event.title);
      },
      header: {
        left: 'prev,today,next',
        center: 'title',
        right: 'listWeek,listDay,dayGridMonth,timeGridWeek,timeGridDay,dayGridWeek'
      },
      events: localStorage.getItem('events'),
      plugins: [dayGrid, timeGrid, interaction, listPlugin],
    };
  }

  handleDateClick(arg:any) {
    
    let event = prompt("Agrega un evento", "Evento...");
    
    if(event?.trim() != "" && event != null) {
      console.log('date click! ' + arg.dateStr, event?.trim());
      const newEvent = {
        title: event?.trim(),
        start: arg.dateStr,
        end: arg.dateStr,
        color: '#ff0000',
        textColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 1,
        allDay: true,
      }
      this.events.push(newEvent);
      localStorage.setItem('events', JSON.stringify(this.events));
      console.log(this.events);
      
      console.log(this.calendarComponent.calendar.optionsManager.overrides.events = JSON.stringify(this.events));
      
      //Reload page
      //location.reload();
    }
    
  }

}
