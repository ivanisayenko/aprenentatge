import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class RepositorisService {
  baseUrl: string = "https://api.github.com/users/ivanisayenko/repos";
  constructor(private http: Http) { }

  getRepos(){
    return this.http.get(this.baseUrl);
  }
}
