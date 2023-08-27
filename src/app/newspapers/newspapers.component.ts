import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewspapersLastestComponent } from '../newspapers-lastest/newspapers-lastest.component';
import { Newspaperslastest } from '../newspaperslastest';
import { NewspapersService } from '../newspapers.service';

@Component({
  selector: 'app-newspapers',
  standalone: true,
  imports: [CommonModule, NewspapersLastestComponent],
  styleUrls: ['./newspapers.component.css'],
  template: `
    <app-newspapers-lastest *ngFor="let newspapersLastest of newspapersLastestList" [newspapersLastest]="newspapersLastest"></app-newspapers-lastest>
  `
})
export class NewspapersComponent implements OnInit {
  currentPage = 0;
  id = 1;
  newspapersLastestList: Newspaperslastest[] = [];
  newspapersService: NewspapersService = inject(NewspapersService);

  constructor(private route: ActivatedRoute, private router: Router, private newspaperService: NewspapersService) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      if (!this.id) {
        this.id = 1;
      }
      this.currentPage = 0;
      this.newspapersLastestList = []; // Reset the list
      this.loadMoreNews();
    });
  }

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const totalHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= totalHeight - 360) {

      this.currentPage++;
      // Load the next page here, and append to the current list
      this.loadMoreNews();
    }
  }

  private loadMoreNews() {
    this.newspapersService.getAllNewspapersLastest(this.id, this.currentPage).then((newspapersLastestList: Newspaperslastest[]) => {
      this.newspapersLastestList.push(...newspapersLastestList);
    });
  }
}
