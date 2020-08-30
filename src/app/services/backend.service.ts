import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable()
export class BackendService {
  private backendUrl;
  constructor(private http: HttpClient) {
    this.backendUrl = environment.backendUrl;
  }

  public login(loginObj) {
    return this.http.post(`${this.backendUrl}/login`, loginObj);
  }
}
