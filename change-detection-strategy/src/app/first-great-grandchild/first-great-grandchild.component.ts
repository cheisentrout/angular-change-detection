import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-great-grandchild',
  template: `
    <div>
      <h4>{{this.componentName}}</h4>
      <button
      (click)="onClick()">{{this.buttonText}}</button>
    </div>
  `,
  styles: [`
  * {
    font-family: 'roboto';
    border-radius: 25px;
  }

  div {
    background: #8C3E37;
    padding: 10px;
  }
    h4 {
      color: white;
    }

    button {
      background: #D9D9D9;
      color: #8C3E37;
      border: 2px solid #D98F4E;
      padding: 5px;
      font-weight: bold;
      transition: .3s;
    }

    button:hover {
      background: #D98F4E;
    }
  `]
})
export class FirstGreatGrandchildComponent implements OnInit {

  constructor() { }

  componentName: string = "First Great-Grandchild"
  buttonText: string = "Trigger event from first great-grandchild."

  ngOnInit(): void {
    console.log(`${this.componentName} triggered ngOnInit.`)
  }

  ngDoCheck(): void {
    console.log(`${this.componentName} ran change detection.`)
  }

  ngOnChanges() {
    console.log(`
          ********
    ${this.componentName} fired onChanges
          ********`)
  }

  onClick() {
    this.buttonText = "Change was triggered."
    console.log(`
    =======================================
    ${this.componentName} changed some data
    =======================================
    `)
  }
}
