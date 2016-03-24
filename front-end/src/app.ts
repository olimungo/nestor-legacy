import { Component } from 'angular2/core';
import { Manual } from './components/manual/manual'

@Component({
  selector: 'app',
  directives: [ Manual ],
  template: `
    <nsr-manual></nsr-manual>
  `,
  styles: [ `
  `]
})
export class App {
}
