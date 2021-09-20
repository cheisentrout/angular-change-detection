import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'first-child',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h3>Child Component</h3>
    <first-grandchild></first-grandchild>
  `,
  styles: [`
    h3 {
      color: purple;
    }
  `]
})
export class FirstChildComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  @Input()

  componentName: string = "First Child"

  ngOnInit(): void {
    console.log(`${this.componentName} fired ngOnInit`)
    console.log(`${this.appComponent.testing}`)
  }

  ngDoCheck(): void {
    console.log(`${this.componentName} checked for changes`)
  }

}
