import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-grandchild',
  template: `
  <div>
    <h4>First Grandchild</h4>
  <first-great-grandchild></first-great-grandchild>
    </div>
  `,
  styles: [`
    * {
      font-family: 'roboto';
      letter-spacing: .5px;
      border-radius: 25px;
    }

    div {
      background: #87A5A5;
      padding: 10px;
    }

    h4 {
      color: white;
    }
  `]
})
export class FirstGrandchildComponent implements OnInit {

  constructor(private ref: ChangeDetectorRef) { }

  componentName: string = "First Grandchild";

  ngOnInit(): void {
    console.log(`${this.componentName} fired ngOnInit`)
  }

  ngDoCheck(): void {
    this.ref.detectChanges()
    console.log(`${this.componentName} ran change detection.`)
  }

}
