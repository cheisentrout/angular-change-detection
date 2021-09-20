import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Person } from './person'
import { peopleArray } from './people-data';
@Component({
  selector: 'app-root',
  template:`
    <div>
      <h1>Parent Component</h1>
      <button
        (click)="changePerson()"
      >{{ this.buttonText }}</button>
      <button
        (click)="changeNum()"
      >Change Number</button>
      <first-child [person]="person" [randomNum]="randomNum"></first-child>
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
      margin-right: 15px;
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
  noChangeBtn: string = "No Change";
  i: number = 0;

  person: Person = {
    firstName: "Clare",
    lastName: "Eisentrout",
    age: 30
  }

  randomNum: number = 45;

  ngOnInit() {
    console.log(`${this.componentName} ran ngOnInit`)
  }

  /** ngDoCheck() is a lifecycle hook that allows for custom change detection to be implemented.
   * We are using it in this demo mostly to get console.log statements whenever change detection reaches
   * a component.
   * But if we add ChangeDetectorRef.detectChanges() somewhere within the DoCheck hook, we can force
   * detection downstream.
   * DoCheck is a very "expensive" hook.
   */
  ngDoCheck(): void {
    console.log(`${this.componentName} checked for changes`)
  }

  changePerson() {
    console.log(`
    =======================================
    ${this.componentName} changed some data.
    =======================================
    `)

    // ** Uncomment to demo how OnPush won't render mutations to existing reference types:
    //this.person.firstName = "Melody"

    if (this.i >= peopleArray.length) {
      this.i = 0;
      this.person = peopleArray[this.i]
    } else {
      this.person = peopleArray[this.i]
    }

    this.i++
  }

  // Demonstrate how value types can be mutated and trigger change:
  changeNum() {
    console.log(`
    =======================================
    ${this.componentName} changed some data.
    =======================================
    `)
    this.randomNum = 77;
  }
}
