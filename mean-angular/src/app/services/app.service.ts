import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'http://192.168.1.114:3000'

  constructor(private httpClient: HttpClient) { }

  fetchServer() {
    return this.httpClient.get(this.url)
  }

  fetch(slug: string): Observable<{ post: Post }> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpClient.get<{ post: Post }>(`${this.url}/posts/${slug}`, options);
  }

  fetchAll(): Observable<{posts: Post[]}> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpClient.get<{posts: Post[]}>(`${this.url}/posts`, options);
  }

  save(title: string, body: string): Observable<Post> {
    const data = JSON.stringify({ title, body });
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpClient.post<Post>(`${this.url}/posts`, data, options);
  }
}
