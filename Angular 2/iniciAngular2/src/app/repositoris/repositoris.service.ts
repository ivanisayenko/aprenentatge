import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
@Injectable({
    providedIn: 'root'
})
export class RepositorisService {
    baseUrl: string = "https://api.github.com/users/ivanisayenko/repos";
    meuRepositri: any = [];
    constructor(private http: Http) { 
        this.getRepos().subscribe((data) => {
            for (let index of data.json()) {
                this.meuRepositri.push({ name: index.full_name, description: index.description });
            }
        });
    }

    getRepos() {
        return this.http.get(this.baseUrl);
    }

    newRepo(objecte: IRepo) {
        this.meuRepositri.push({ name: objecte.name, description: objecte.description });
        objecte.name = "";
        objecte.description = "";
    }

    getMeuRepository() {
        return this.meuRepositri;
    }

}
interface IRepo {
    name: String;
    description: String;
}
