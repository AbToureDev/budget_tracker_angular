import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER:string = 'user'
  constructor(
    private readonly router:Router
  ) { }

  addUser(name:string) {
    const user:User = {
      id: Date.now(),
      name:name
    }
    localStorage.setItem(this.USER, JSON.stringify(user))
    console.log("Ajout de l'utilisateur.")
  }
  getUser() {
      return JSON.parse(localStorage.getItem(this.USER) || '{}') as User;
  }

  deleteUserAccount() {
    localStorage.removeItem('user');
    this.router.navigate(['/create_account'])
    console.log("User is delete")
  }
  isLoggedIn() {
    return Object.keys(this.getUser()).length > 0
  }

}
