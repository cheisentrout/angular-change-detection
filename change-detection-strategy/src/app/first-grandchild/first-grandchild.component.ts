import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-grandchild',
  template: `
    <h4>First Grandchild</h4>
  `,
  styles: [`
    * {
      font-family: 'roboto';
      letter-spacing: .5px;
    }

    h4 {
      color: white;
      background: lightblue;
      padding: 5px;
    }
  `]
})
export class FirstGrandchildComponent implements OnInit {

  constructor() { }

  componentName: string = "First Grandchild";

  ngOnInit(): void {
    console.log(`${this.componentName} fired ngOnInit`)
  }

  ngDoCheck(): void {
    console.log(`${this.componentName} checked for changes`)
  }

}
