import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {FormWrapperComponent} from '../../components/form-wrapper/form-wrapper.component';
import {BudgetService} from '../../services/budget/budget.service';
import {ExpenseService} from '../../services/expense/expense.service';
@Component({
  selector: 'app-home',
  imports: [FormWrapperComponent],
  standalone:true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(
    readonly userService:UserService,
    readonly budgetService:BudgetService,
    readonly expenseService: ExpenseService,
  ) {}

  ngOnInit(): void {
    console.log("initialisation")
  }

}
