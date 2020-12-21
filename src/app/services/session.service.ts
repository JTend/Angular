import { Injectable } from '@angular/core';
import user from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private User : user;

  constructor() { 
    this.User = { id : 0, name : '', isAdmin : false };
  }

  getUser = () : user => this.User;

  logIn() : user {
    this.User = { id : 1, name : 'JT', isAdmin : true }
    return this.User;
  }

  logOut() : user {
    this.User = { id : 0, name : '', isAdmin : false }
    return this.User;
  }
}
