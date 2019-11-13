import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get(this.url);
  }
}
