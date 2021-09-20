import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second-grandchild',
  template: `
  <div>
    <h4>Second Grandchild</h4>
    <p>{{ this.displayMessage }}</p>
    <button
      (click)="onChange()"
    >Trigger Event on Second Grandchild</button>
  </div>
  `,
  styles: [`
    * {
      font-family: 'roboto';
      letter-spacing: .5px;
      border-radius: 25px;
    }

    div {
      background: #D9D9D9;
      padding: 10px;
    }

    h4 {
      color: #8C3E37;
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
    const ogMessage: string = "This is our starting text. But if you click the button..."
    const changedMessage: string = "...this message was changed by the click event!"
    if (this.displayMessage !== changedMessage) {
      this.displayMessage = changedMessage
    } else {
      this.displayMessage = ogMessage;
    }
    console.log(`
    =======================================
    ${this.componentName} changed some data
    =======================================
    `)
  }

}
