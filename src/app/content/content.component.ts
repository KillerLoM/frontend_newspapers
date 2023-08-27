import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NewspapersService } from '../newspapers.service';
import { Newspaperslastest } from '../newspaperslastest';
import { NewspaperContent } from '../newspaper-content';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  
  template: `
    <div class="d-flex justify-content-around">
      <h1 class="heading">{{newspaperContent?.heading}}</h1>
    </div>
    <div class="subHeading">
      <h2 class="text-black-50 bg-white ">{{newspaperContent?.subHeading}}</h2>
    </div>
    <div class="grid gap-3">
      <h3 class="p-2 g-col-6">{{newspaperContent?.time}}</h3>
      <h3 class="p-2 g-col-6">{{newspaperContent?.category}}</h3>
    </div>
    <div class="object-fit-lg-contain border rounded">
      <div class="content d-flex align-items-center justify-content-center">
        <div [innerHTML]="newspaperContent?.content" style = "img: weight = 30px;"></div>
      </div>
    </div>
  `,
  styleUrls: ['./content.component.css'],
  
})
export class ContentComponent {
  newspaperContent: NewspaperContent | undefined;
  newspapersCode = "1";

  constructor(private route: ActivatedRoute, private newspaperService: NewspapersService) {
    const newspapersCode = this.route.snapshot.params['code'];
    this.newspaperService.getContentNewspaper(newspapersCode).then(newspaperContent => {
      this.newspaperContent = newspaperContent;
    });
  }
  
}
