import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    private events = "http://localhost:3000/api/events";
    private especial = "http://localhost:3000/api/especial";

    constructor(private http: HttpClient) { }

    getEvents(){
        return this.http.get<any>(this.events);
    }

    getEspecialEvents(){
        return this.http.get<any>(this.especial);
    }
}
