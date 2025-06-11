import { Component } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [
    NgIf
  ],
  standalone:true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor( public readonly userService:UserService) {
  }

}
