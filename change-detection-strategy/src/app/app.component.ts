import { Component, OnInit } from '@angular/core';
import { Person } from './person'
import { peopleArray } from './people-data';
@Component({
  selector: 'app-root',
  template:`
    <div>
      <h1>Parent Component</h1>
      <button
        (click)="onClick()"
      >{{ this.buttonText }}</button>
      <first-child [person]="person"></first-child>
      <second-child></second-child>
    </div>
  `,
  styles: [`
    * {
      font-family: 'roboto';
      letter-spacing: .5px;
    }

    div {
      border: 3px solid #D98F4E;
      padding: 10px;
      background: #D9D9D9;
    }

    h1 {
      color: #BF573F;
    }

    button {
      background: #87A5A5;
      color: whitesmoke;
      border: 2px solid #D98F4E;
      padding: 5px;
      font-weight: bold;
      transition: .3s;
    }

    button:hover {
      background: #BF573F;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'change-detection-strategy';
  componentName: string = "Parent Component";
  buttonText: string = "Click to change Person data on Parent level";
  i = 0;

  person: Person = {
    firstName: "Clare",
    lastName: "Eisentrout",
    age: 30
  }

  ngOnInit() {
    console.log(`${this.componentName} ran ngOnInit`)
  }

  ngDoCheck(): void {
    console.log(`${this.componentName} checked for changes`)
  }

  onClick() {
    this.buttonText = "Person data changed."

    console.log(`
    =======================================
    ${this.componentName} changed some data.
    =======================================
    `)

    if (this.i >= peopleArray.length) {
      this.i = 0;
      this.person = peopleArray[this.i]
    } else {
      this.person = peopleArray[this.i]
    }

    this.i++
  }
}
