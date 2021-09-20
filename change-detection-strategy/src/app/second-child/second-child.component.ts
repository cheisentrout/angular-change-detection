import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second-child',
  template: `
    <div>
      <h3>Second child</h3>
      <second-grandchild></second-grandchild>
    </div>
  `,
  styles: [`
    * {
      font-family: 'roboto';
      letter-spacing: .5px;
      background: #BF573F;
      border-radius: 25px;
    }

    div {
      padding: 10px;
      margin: 10px 0;
    }

    h3 {
      color: whitesmoke;
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
    console.log(`${this.componentName} ran change detection.`)
  }

  ngOnChanges() {
    console.log(`
          ********
    ${this.componentName} fired onChanges
          ********`)
  }

}
