//import { Component } from '@angular/core'
import { AuthenticationService } from './user/authentication.service'
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(public auth: AuthenticationService) {}
}