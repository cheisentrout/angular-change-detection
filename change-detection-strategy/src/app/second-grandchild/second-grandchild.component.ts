import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second-grandchild',
  template: `
    <h4>Second Grandchild</h4>
    <p>{{ this.displayMessage }}</p>
    <button
      (click)="onChange()"
    >Trigger Event on Second Grandchild</button>
  `,
  styles: [`
    h4 {
      color: white;
      background: pink;
    }
  `]
})
export class SecondGrandchildComponent implements OnInit {

  constructor() { }

  componentName: string = "Second Grandchild"
  displayMessage: string = "this is the test display message"

  ngOnInit(): void {
    console.log(`${this.componentName} fired ngOnInit`)
  }

  ngDoCheck(): void {
    console.log(`${this.componentName} checked for changes`)

  }

  onChange() {
    this.displayMessage = "CHANGED MESSAGE"
    console.log(`${this.componentName} changed some data`)
  }

}
