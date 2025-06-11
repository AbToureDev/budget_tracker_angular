import {Injectable} from '@angular/core';
import {Budget, BudgetCategory} from '../../interfaces/budget.interface';
import {Observable, Subject} from 'rxjs';
import {BudgetCardConfig} from '../../interfaces/budget-card-config-interface';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  BUDGET:string='BUDGET';
  BUDGET_CATEGORIES = 'BUDGET_CATEGORIES'

  public budgetSubject:Subject<Budget[]> = new Subject();
  public budgetCategorySubject:Subject<BudgetCategory[]> = new Subject();
  budgetCards:BudgetCardConfig[] =[];


  constructor( private readonly router: Router) { }

  addBudget(budget:Budget) {
    const budgets = this.getBudgets();
    budgets.push(budget);
    this.setBudgets(budgets);
  }

  getBudgets():Budget[] {
    return JSON.parse(localStorage?.getItem(this.BUDGET) ?? '[]') as Budget[];
  }

  getBudgetsCategories():BudgetCategory[] {
    return JSON.parse(localStorage?.getItem(this.BUDGET_CATEGORIES) ?? '[]') as  BudgetCategory[];
  }
  setBudgets(budgets:Budget[]){
    localStorage.setItem(this.BUDGET, JSON.stringify(budgets));

    const budgetCategories: BudgetCategory[] = budgets.map((item:Budget) => {
      return {
        id:item.id,
        color:item.color,
        name:item.name
      } as BudgetCategory
    })
    this.setBudgetsCategories(budgetCategories);
    this.budgetSubject.next(budgets)

  }
  setBudgetsCategories(budgetCategories:BudgetCategory[]) {
    localStorage.setItem(this.BUDGET_CATEGORIES, JSON.stringify(budgetCategories));
    this.budgetCategorySubject.next(budgetCategories)

  }
  getBudgetById(id:string) {
    const budgets = this.getBudgets();
    const index= budgets.findIndex(x => x.id === id)
    if (index > -1) {
      return budgets[index]
    }
    throw Error("Budget does not exist.")

  }
  getBudgetData(): Observable<Budget[]> {
    return this.budgetSubject;
  }

  getBudgetCategoryData(): Observable<BudgetCategory[]> {
    return this.budgetCategorySubject;
  }
  deleteBudget() {
    console.log('deleted')
  }

  buildBudgetCards(budgets:Budget[]){
    this.budgetCards = budgets.map((item:Budget) => {
      return {
        name:item.name,
        budget:item.amount,
        color: item.color,
        spent: item.spend,
        onClick: () => {
          this.router.navigate([`details/${item.id}`])
        }
      }
    })

  }
}
