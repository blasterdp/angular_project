import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  formulario: FormGroup;
  formArray: FormArray | undefined;
  todo: any[];

  constructor(private fb: FormBuilder) {
    if (!localStorage.getItem('formArray')) {
      localStorage.setItem('formArray', "[]")
    }

    this.formulario = this.fb.group({
      taskText: '',
      myChoices: new FormArray([]),
    });

    this.formulario.value.myChoices = JSON.parse(localStorage.getItem('formArray')!);
    this.formArray = JSON.parse(localStorage.getItem('formArray')!);
    this.todo = JSON.parse(localStorage.getItem('formArray')!)
  }

  ngOnInit(): void {
  }

  addTask(event: any) {
    event.preventDefault();

    if (this.formulario.value.taskText != "") {
      this.todo.push({
        value: `check-${this.todo.length}`,
        description: this.formulario.value.taskText,
        checked: "checked",
        createAt: new Date()
      });

      localStorage.setItem('formArray', JSON.stringify(this.todo));
      this.formulario.controls["taskText"].setValue("")
      console.log(this.todo);
      
    }
  }

  onCheckChange(event: any) {
    this.formArray = this.formulario.get('myChoices') as FormArray;
    
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      if (JSON.stringify(this.todo).indexOf(event.target.id) == -1) {
        this.todo.push(new FormControl({
          value: event.target.id,
          description: event.target.name,
          checked: "checked",
          createAt: new Date()
        }));
      } else {
        this.formArray.value.forEach((task: any) => { 
          if (task.value == event.target.id) {
            task.checked = "checked"
          }
        })
        
      }
    } else {
      
      //this.formArray.value.splice(event.target.id.split("-")[1], 1);
      this.todo.splice(event.target.id.split("-")[1], 1);
      localStorage.clear();
      localStorage.setItem('formArray', JSON.stringify(this.todo));

      console.log("cambia", event.target.id.split("-")[1]);
      console.log("cambia", this.formArray.value);
      
    }
    //console.log(JSON.parse(localStorage.getItem('formArray')!));
  }

}
