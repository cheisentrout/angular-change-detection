import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Person } from '../person';

@Component({
  selector: 'first-child',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <h3>First Child</h3>
      <p>Person data:</p>
      <ol>
        <li>{{person?.firstName}}</li>
        <li>{{person?.lastName}}</li>
        <li>{{person?.age}}</li>
      </ol>
      <p>Number data:</p>
      <p>{{randomNum}}</p>
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

    p {
      font-weight: bold;
      color: whitesmoke;
    }

    h3 {
      color: whitesmoke;
    }
  `]
})
export class FirstChildComponent implements OnInit {

  constructor(public appComponent: AppComponent, private cdr: ChangeDetectorRef) { }

  @Input()
  person: Person | undefined;

  @Input()
  randomNum?: number;

  componentName: string = "First Child"

  ngOnInit(): void {
    console.log(`${this.componentName} fired ngOnInit`)
  }


  /** Of note / to explore further:
   * Adding detect Changes() to the DoCheck lifecycle hook DOES seem to force change detection
   * past the OnPush method.
   */
  ngDoCheck(): void {
    // this.cdr.detectChanges()
    console.log(`${this.componentName} ran change detection.`)
  }

  ngOnChanges() {
    console.log(`
          ********
    ${this.componentName} fired onChanges()
          ********`)
  }
}
