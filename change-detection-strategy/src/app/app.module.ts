import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { FirstGrandchildComponent } from './first-grandchild/first-grandchild.component';
import { SecondGrandchildComponent } from './second-grandchild/second-grandchild.component';
import { FirstGreatGrandchildComponent } from './first-great-grandchild/first-great-grandchild.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstChildComponent,
    SecondChildComponent,
    FirstGrandchildComponent,
    SecondGrandchildComponent,
    FirstGreatGrandchildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
