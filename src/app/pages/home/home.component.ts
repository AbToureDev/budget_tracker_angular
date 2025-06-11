import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {FormWrapperComponent} from '../../components/form-wrapper/form-wrapper.component';
import {BudgetService} from '../../services/budget/budget.service';
import {ExpenseService} from '../../services/expense/expense.service';
import {BudgetCardComponent} from '../../components/budget-card/budget-card.component';
import {Budget} from '../../interfaces/budget.interface';
import {BudgetCardConfig} from '../../interfaces/budget-card-config-interface';
import {Router} from '@angular/router';
import {routes} from '../../app.routes';
import {NgFor, NgIf} from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [FormWrapperComponent, BudgetCardComponent, NgIf, NgFor],
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
    this.budgetService.buildBudgetCards(this.budgetService.getBudgets())
    console.log("initialisation")
  }

  protected readonly BudgetService = BudgetService;
}
