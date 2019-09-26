import { Component, OnInit } from '@angular/core';
import { AuthCompetitonService, CompetitionObject } from '../auth-competiton.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.css']
})
export class AddCompetitionComponent implements OnInit {

  credentials: CompetitionObject = {
    id: 0,
    competition_name: '',
    winning_price: ''
  }


  HEROES = [
    { name: './assets/img/c.jpg' },
    { name: './assets/img/c2.jpg' },
    { name: './assets/img/c.jpg' },
    { name: './assets/img/c3.jpg' },
    { name: './assets/img/c4.jpg' },
  ]

  index1 = 0
  index2 = 1
  index3 = 2
  index4 = 3
  index5 = 4

  constructor(private authCom: AuthCompetitonService, private router: Router) { }

  ngOnInit() {

  }


  next() {
    if (this.index1 == 4)
      this.index1 = 0
    else
      this.index1++

    if (this.index2 == 4)
      this.index2 = 0
    else
      this.index2++

    if (this.index3 == 4)
      this.index3 = 0
    else
      this.index3++

    if (this.index4 == 4)
      this.index4 = 0
    else
      this.index4++

    if (this.index5 == 4)
      this.index5 = 0
    else
      this.index5++
  }

  previous() {
    if (this.index1 == 0)
      this.index1 = 4
    else
      this.index1--

    if (this.index2 == 0)
      this.index2 = 4
    else
      this.index2--

    if (this.index3 == 0)
      this.index3 = 4
    else
      this.index3--

    if (this.index4 == 0)
      this.index4 = 4
    else
      this.index4--

    if (this.index5 == 0)
      this.index5 = 4
    else
      this.index5--
  }

  AddCompetition() {
    console.log(this.credentials)
    this.authCom.addCompetition(this.credentials).subscribe(
      data => {

      }
    )
  }

}
