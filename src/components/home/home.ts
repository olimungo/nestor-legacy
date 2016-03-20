import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { DatePicker } from 'ec-oib-oibkw-commons/calendar'


@Component({
  selector: 'app',
  directives: [ DatePicker ],
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">OIB</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
          <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    
    <div class="jumbotron">
      <h1>OIB seed powered with Webpack</h1>
      <p>Included in this seed</p>
      
      <ul class="technologies">
        <li>jQuery</li>
        <li>Bootstrap with Javascript components</li>
        <li>Font-awesome <i class="fa fa-heart"></i></li>
        <li>The ec-oib-oikw-commons library</li>
        <li>The Angular2 router already set-up</li>
      </ul>
      
      <p><a class="btn btn-primary btn-lg" href="#" role="button" (click)="click()">Learn more or not</a></p>
    </div>
    
    <div class="date-picker">
      <oib-date-picker></oib-date-picker>
    </div>  
  `,
  styles: [ `
    .jumbotron h1 {
      font-size: 30px;
    }
    
    .jumbotron .technologies {
      margin-bottom: 30px;
      font-size: 16px;
      color: #666;
    }
    
    .date-picker {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  ` ]
})
export class Home {
  year: number = 2016;
  month: number = 5;
  
  constructor(private router: Router) {
  }
  
  click() {
    console.log('... or not!');
    
    this.router.navigate([ 'Test' ]);
  }
}