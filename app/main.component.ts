import {Component} from 'angular2/core';
import {YoutubeComponent} from './youtube.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home.component';
import {LoginComponent} from './login.component';

@Component({
  selector: 'my-app',
  templateUrl: '../templates/main.html',
  directives: [YoutubeComponent, ROUTER_DIRECTIVES]
})
@RouteConfig ([
  {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/login', name: 'Login', component: LoginComponent}
])
export class MainComponent {}
