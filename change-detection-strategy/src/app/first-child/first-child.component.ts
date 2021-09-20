import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Person } from '../person';

@Component({
  selector: 'first-child',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div>
    <h3>First Child</h3>
    <ol>
      <li>{{person?.firstName}}</li>
      <li>{{person?.lastName}}</li>
      <li>{{person?.age}}</li>
    </ol>
    <first-grandchild></first-grandchild>
</div>
  `,
  styles: [`
    * {
      font-family: 'roboto';
      letter-spacing: .5px;
      background: #D98F4E;
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
export class FirstChildComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  @Input()
  person: Person | undefined;

  componentName: string = "First Child"

  ngOnInit(): void {
    console.log(`${this.componentName} fired ngOnInit`)
  }

  ngDoCheck(): void {
    console.log(`${this.componentName} ran change detection.`)
  }

}
