import { Component } from '@angular/core';
import {FloatLabelModule} from 'primeng/floatlabel';
import {InputTextModule} from 'primeng/inputtext';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-account',
  imports: [FloatLabelModule, InputTextModule, FormsModule, ReactiveFormsModule],
  standalone:true,
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  // value:string='';
  image:string='/budgeting_set_2.jpg'

  form:FormGroup = new FormGroup({
    value: new FormControl('', Validators.required)
  })
  constructor(
    private readonly  userService:UserService,
    private readonly router:Router
  ) {
  }


  handleClick() {
    const {value} = this.form.value;
    this.userService.addUser(value)
    this.router.navigate(['home'])}
}
