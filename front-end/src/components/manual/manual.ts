import { Component, HostBinding } from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'nsr-manual',
  template: `
    <div class="nestor">
      <span class="fa-stack fa-lg light" [class.on]="lightState === 'on'" (click)="switchLight()">
        <i class="fa fa-circle-thin fa-stack-2x"></i>
        <i class="fa fa-lightbulb-o fa-stack-1x"></i>
      </span>

      <div class="first-line">
        <button (click)="changeTargetTemperature(-0.5)"><i class="fa fa-chevron-left"></i></button>
        
        <div class="temperature">
          <div class="text-temperature">Temperature</div>
          <div class="target-temperature">{{ targetTemperature | number:'2.1-1' }}°C</div>
        </div>
        
        <button (click)="changeTargetTemperature(0.5)"><i class="fa fa-chevron-right"></i></button>
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

     .nestor .light {
        font-size: 40px;
        margin: 40px 0 0 40px;
     }

     .nestor .light.on {
       color: yellow;
     }

     .nestor .light:hover {
     }

     .nestor .light:active {
        color: yellow;
     }
     
     .nestor .first-line {
       display: flex;
       align-items: center;
       justify-content: flex-end;
       padding: 8em 7em 0 0;
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
       flex-direction: column;
       align-items: flex-end;
     }
     
     .nestor .first-line .temperature .text-temperature {
       font-size: 1em;
       text-transform: uppercase;
       margin-top: 0.6em;
     }
     
     .nestor .first-line .temperature .target-temperature {
       font-size: 8em;
       line-height: 1em;
     }
  `]
})
export class Manual {
  @HostBinding() targetTemperature: number = 0;
  @HostBinding() lightState: string = 'off';

  constructor(private http: Http) {
    this.getTargetTemperature();
  }
  
  getTargetTemperature() {
    this.http.get('http://localhost:3000/temperature/target/get/')
      .subscribe(response => {
        console.log(response.json().value);
        this.targetTemperature = response.json().value;
      }
    );
  }
  
  changeTargetTemperature(step) {
    var newTemperature = this.targetTemperature + step;
    
    this.http.get('http://localhost:3000/temperature/target/set/' + newTemperature)
      .subscribe(response => {
        this.targetTemperature = newTemperature;
        
        console.log(response.json());
      }
    );
  }

  switchLight() {
    if (this.lightState === 'on') {
      this.lightState = 'off';
    } else {
      this.lightState = 'on';
    }

    this.http.get('http://localhost:3000/light/' + this.lightState)
      .subscribe(response => {
        console.log(response.json());
      } 
    );
  }
}
