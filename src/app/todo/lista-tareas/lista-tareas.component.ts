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
        description: this.formulario.value.taskText
      });
      this.formulario.controls["taskText"].setValue("")
    }

  }

  onCheckChange(event: any) {
    this.formArray = this.formulario.get('myChoices') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      if (JSON.stringify(this.formArray.value).indexOf(event.target.id) == -1) {
        this.formArray.push(new FormControl({
          value: event.target.id,
          description: event.target.name
        }));
      }
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;

      this.formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value.value == event.target.id) {
          // Remove the unselected element from the arrayForm
          this.formArray?.removeAt(i);
          return;
        }

        i++;
      });
    }
    localStorage.clear();
    localStorage.setItem('formArray', JSON.stringify(this.formArray.value));
    console.log(this.formArray.value);

  }

}
