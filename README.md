# Formularios

## Angular proporciona dos enfoques diferentes para manejar la entrada del usuario a través de formularios: 

- Reactivo: Proporcionan acceso directo y explícito al modelo de objetos de formularios subyacente. En comparación con los formularios basados ​​en plantillas, son más robustos: son más escalables, reutilizables y comprobables. Si los formularios son una parte clave de su aplicación, o si ya está usando patrones reactivos para crear su aplicación, use formularios reactivos.

- Basado en plantillas: Se basan en las directivas de la plantilla para crear y manipular el modelo de objetos subyacente. Son útiles para agregar un formulario simple a una aplicación, como un formulario de registro de lista de correo electrónico. Son fáciles de agregar a una aplicación, pero no escalan tan bien como los formularios reactivos. Si tiene requisitos de formulario muy básicos y una lógica que se puede administrar únicamente en la plantilla, los formularios basados ​​en plantillas podrían ser una buena opción.

## Clases de base de formulario común

Tanto los formularios reactivos como los controlados por plantillas se basan en las siguientes clases base.

- FormControl: Rastrea el valor y el estado de validación de un control de formulario individual.

- FormGroup: Realiza un seguimiento de los mismos valores y estado para una colección de controles de formulario.

- FormArray: Realiza un seguimiento de los mismos valores y estado para una matriz de controles de formulario.

- ControlValueAccessor: Crea un puente entre FormControllas instancias de Angular y los elementos DOM integrados.

## Formularios Reactivos

- Deficnición de un control
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl">
  `
})
export class FavoriteColorComponent {
  favoriteColorControl = new FormControl('');
}

## Formularios Basados en plantillas

- Deficnición de un control
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-favorite-color',
  template: `
    Favorite Color: <input type="text" [(ngModel)]="favoriteColor">
  `
})
export class FavoriteColorComponent {
  favoriteColor = '';
}