import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second-child',
  template: `
    <h3>Second child</h3>
    <second-grandchild></second-grandchild>
  `,
  styles: [`
    h3 {
      color: blue;
    }
  `]
})
export class SecondChildComponent implements OnInit {

  constructor() { }

  componentName: string = "Second Child";

  ngOnInit(): void {
    console.log(`${this.componentName} fired ngOnInit`)
  }

  ngDoCheck(): void {
    console.log(`${this.componentName} checked for changes`)
  }

}
