import {Component, OnInit} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Select} from 'primeng/select';
import { InputNumber } from 'primeng/inputnumber';
import {Budget, BudgetCategory} from '../../interfaces/budget.interface';
import {UserService} from '../../services/user/user.service';
import {BudgetService} from '../../services/budget/budget.service';
import {BudgetCardConfig} from '../../interfaces/budget-card-config-interface';


@Component({
  selector: 'app-form-wrapper',
  imports: [FormsModule, InputTextModule, Select, ReactiveFormsModule],
  standalone:true,
  templateUrl: './form-wrapper.component.html',
  styleUrl: './form-wrapper.component.css'
})
export class FormWrapperComponent implements OnInit {
  value:string='';
  budgetCategories:BudgetCategory[] = [];
  budget:Budget[] = [];
  budgetCards:BudgetCardConfig[] =[];

  formBudget:FormGroup = new FormGroup<any>({
    name: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required)

  })
  formExpense:FormGroup = new FormGroup<any>({
    name: new FormControl('', Validators.required),
    amountexpense: new FormControl('', Validators.required),
    select: new FormControl('', Validators.required)
  })
  handleAddBudget() {
    const {name, amount} = this.formBudget.value
    const buget:Budget = {
      id:Date.now().toString(),
      name:name,
      spend:0,
      amount:parseInt(amount),
      color:'amber'
    }
    this.budgetSerice.addBudget(buget);
    this.formBudget.reset();
    console.log(this.formBudget.value)
    console.log("clidk")
  }
  handleClick() {
    const {name, amountexpense, select} = this.formExpense.value;
    console.log(this.formExpense.value)
    console.log("clidk")
  }


  constructor(
    public userService:UserService,
    private readonly budgetSerice:BudgetService
  ) {}



  ngOnInit() {
    this.budgetCategories = this.budgetSerice.getBudgetsCategories();
    this.budget = this.budgetSerice.getBudgets();
    this.budgetSerice.getBudgetData().subscribe({
      next: (res:Budget[]) => {
        this.budget =res
      },
      error:(err:any) => {
      console.log(err)
    }
    });

    this.budgetSerice.getBudgetCategoryData().subscribe({
      next: (res:BudgetCategory[]) => {
        this.budgetCategories =res
      },
      error:(err:any) => {
      console.log(err)
    }
    });
  }
}
