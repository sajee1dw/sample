import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

export interface CompetitionObject{
  id: number
  competition_name: string
  winning_price: string
}

@Injectable()
export class AuthCompetitonService {

  constructor(private http: HttpClient, private router: Router) { }

  public addCompetition(competition:CompetitionObject):Observable<any>{
      return this.http.post(`/users/addCompetition`,competition)
  }
}




