import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {StudentHomeComponent} from './student-home.component';
import {StudentDetailComponent} from './student-detail.component';
import {Student,StudentService} from './student.service';


//Component decorator
@Component({
  templateUrl: '../../templates/student-main.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [StudentService] //Now available to all child components
})
@RouteConfig([
  {path:'/students', name: 'StudentHome', component: StudentHomeComponent},
  {path:'/student/:id', name: 'Student', component: StudentDetailComponent} //use route params here to pass data
])

export class StudentCenterComponent {}
