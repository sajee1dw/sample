import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthenticationService } from 'src/app/user/authentication.service';
import { Router } from '@angular/router';
import { Url } from 'url';

@Component({
  selector: 'app-dev-competition',
  templateUrl: './dev-competition.component.html',
  styleUrls: ['./dev-competition.component.css']
})
export class DevCompetitionComponent implements OnInit {

  constructor(private http: HttpClient, private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }


}
