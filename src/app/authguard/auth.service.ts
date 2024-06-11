import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  constructor() { }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
