import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <div>
      <h1>This is the parent component</h1>
      <button
        (click)="onClick()"
      >{{ this.buttonText }}</button>
      <first-child></first-child>
      <second-child></second-child>
    </div>
  `,
  styles: [`
    * {
      font-family: 'roboto';
      letter-spacing: .5px;
    }

    h1 {
      color: green;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'change-detection-strategy';
  componentName: string = "Main Component"
  buttonText: string = "I'm a button, click me"

  ngOnInit() {
    console.log(`${this.componentName} ran ngOnInit`)
  }

  ngDoCheck(): void {
    console.log(`${this.componentName} checked for changes`)
  }

  onClick() {
    this.buttonText = "ARGH, I've been clicked!!!"
    console.log(`${this.componentName} changed some data`)
  }
}
