import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListaTareasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
