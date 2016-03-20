import { Component } from 'angular2/core';

@Component({
  selector: 'app',
  template: `
    <div class="nestor">
      <div class="first-line">
        <button (click)="changeTemperature(-1)"><i class="fa fa-chevron-left"></i></button>
        
        <div class="temperature">
          <div class="text-temperature">Temperature</div>
          <div class="actual-temperature">{{ currentTemperature }}°C</div>
        </div>
        
        <button (click)="changeTemperature(1)"><i class="fa fa-chevron-right"></i></button>
      </div>
    </div>
  `,
  styles: [ `
     .nestor {
       width: 100%;
       height: 100%;
       background: #8ACE62;
       color: whitesmoke;
     }
     
     .nestor .first-line {
       display: flex;
       align-items: center;
       justify-content: flex-end;
       padding: 2em 7em 0 0;
     }
     
     .nestor .first-line button {
       width: 2em;
       height: 2em;
       background: #7FC158;
       border: none;
       border-radius: 50%;
       margin: 0 1em;
       font-size: 2em;
       color: whitesmoke;
     }
     
     .nestor .first-line button:hover {
       background: #B4DD9B;
     }
     
     .nestor .first-line button:focus {
       outline: none;
     }
     
     .nestor .first-line button:active {
       background: #69A447;
     }
     
     .nestor .first-line .temperature {
       display: flex;
     }
     
     .nestor .first-line .temperature .text-temperature {
       font-size: 1.3em;
       text-transform: uppercase;
       margin-top: 0.6em;
     }
     
     .nestor .first-line .temperature .actual-temperature {
       font-size: 8em;
       line-height: 1em;
     }
  `]
})
export class App {
  currentTemperature: number = 22;
  
  changeTemperature(step) {
    this.currentTemperature += step;  
  }
}