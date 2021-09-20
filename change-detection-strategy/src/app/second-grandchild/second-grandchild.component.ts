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
    * {
      font-family: 'roboto';
      letter-spacing: .5px;
    }

    h4 {
      color: white;
      background: pink;
      padding: 5px;
    }

    button {
      background: lavender;
    }
  `]
})
export class SecondGrandchildComponent implements OnInit {

  constructor() { }

  componentName: string = "Second Grandchild"
  displayMessage: string = "This is our starting text. But if you click the button..."

  ngOnInit(): void {
    console.log(`${this.componentName} fired ngOnInit`)
  }

  ngDoCheck(): void {
    console.log(`${this.componentName} ran change detection.`)
  }

  onChange() {
    this.displayMessage = "...this message was changed by the click event!"
    console.log(`${this.componentName} changed some data`)
  }

}
