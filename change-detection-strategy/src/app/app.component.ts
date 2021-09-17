import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <div>
      <h1>This is the parent component</h1>
      <button
        (click)="onClick()"
      >Click Me</button>
      <first-child></first-child>
    </div>
  `,
  styles: [`
    h1 {
      color: green;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'change-detection-strategy';
  componentName: string = "Main Component"
  testing: string = "this is a test string to send input data"

  ngOnInit() {
    console.log(`${this.componentName} ran ngOnInit`)
  }

  onClick() {
    console.log("onClick fired")
  }
}