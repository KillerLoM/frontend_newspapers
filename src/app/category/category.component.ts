import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';
import { NewspapersService } from '../newspapers.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
 <ul class="navbar-brand category-list ">
  <li *ngFor="let category of categoryList">
    <a class="navbar-brand" [routerLink]="['/?id=', category.id]" (click)="passId(category.id)" [class.active]="category.id === activatedCategoryId">{{ category.category }}</a>
  </li>
</ul>
  `,
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() category: Category = { id: 0, category: '' };
  categoryList: Category[] = [];
  activatedCategoryId: number = 0; 

  constructor(private route: ActivatedRoute, private newspapersService: NewspapersService, private router: Router) {
    this.newspapersService.getCategoryNewspaper().then((categoryList) => {
      this.categoryList = categoryList ?? [];
    });
    this.route.queryParams.subscribe(params => {
      this.activatedCategoryId = parseInt(params['id']) || 0; 
    });
  }

  passId(id: any) {
    this.router.navigate([''], { queryParams: { id: id } });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500); // Thời gian delay là 500ms (0.5 giây)
  }
}