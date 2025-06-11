import {Component, Input, OnInit} from '@angular/core';
import {BudgetCardConfig} from '../../interfaces/budget-card-config-interface';
import {Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';
import {UiService} from '../../services/ui/ui.service';
import {CurrencyPipe, NgIf} from '@angular/common';
import {BudgetService} from '../../services/budget/budget.service';

@Component({
  selector: 'app-budget-card',
  imports: [
    NgIf,
    CurrencyPipe
  ],
  standalone:true,
  templateUrl: './budget-card.component.html',
  styleUrl: './budget-card.component.css'
})
export class BudgetCardComponent implements OnInit {
  @Input() config!: BudgetCardConfig;
  // @Input() isDelete!: boolean = false;
  bgColor:string='';
  beForColor:string='';
  textColor:string = '';
  borderColor:string = '';

  constructor(
    private readonly router:Router,
    private readonly uiService:UiService,
    private readonly budgetCards:BudgetService
  ) {}

  ngOnInit(): void {
    if (!this.config) {
      return;
    }
    this.borderColor = this.uiService.generateTailwindClass(this.config.color, 'border');
    this.textColor = this.uiService.generateTailwindClass(this.config.color, 'text');
    this.bgColor = this.uiService.generateTailwindClass(this.config.color, 'bg');
    // this.beForColor = this.config.color === 'amber' ? 'amber-bg' : '';

  }
}
