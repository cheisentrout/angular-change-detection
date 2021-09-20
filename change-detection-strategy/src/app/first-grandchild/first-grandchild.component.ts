import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-grandchild',
  template: `
    <h4>First Grandchild</h4>
  `,
  styles: [`
    h4 {
      color: white;
      background: lightblue;
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
