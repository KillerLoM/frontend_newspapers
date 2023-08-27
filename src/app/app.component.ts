import { Component } from '@angular/core';
import { NewspapersComponent } from './newspapers/newspapers.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoryComponent } from './category/category.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NewspapersComponent,
    RouterLink, 
    RouterOutlet,

    CategoryComponent,
  ],
  template: `
 <main>
      <!-- 
        <img class="brand-logo" src="/assets/123.png" alt="logo" aria-hidden="true"
        style=" width: 60px; height: 60px;">
      </header> -->
    <!-- <a class="navbar-brand nav-link active" [routerLink]="['/']">
    <img class="brand-logo" src="/assets/123.png" alt="logo" aria-hidden="true"
        style=" width: 30px; height: 30px;">
    </a>
  <ul class="navbar justify-content-center">
  <li class="nav-item">
 -->
 <!-- <header class="brand-name">
 <ul class="navbar nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">abcsadghgwdfgsduygy8fgsd</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">abcsadghgwdfgsduygy8fgsd</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">abcsadghgwdfgsduygy8fgsd</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">abcsadghgwdfgsduygy8fgsd</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">abcsadghgwdfgsduygy8fgsd</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">abcsadghgwdfgsduygy8fgsd</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">abcsadghgwdfgsduygy8fgsd</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
</header> -->
<header>
<nav class="navbar  bg-body-tertiary ">
  <div class="container-fluid">
    <!-- <a class="navbar-brand" href="#">
    <img class="brand-logo" src="/assets/123.png" alt="logo" aria-hidden="true"
        style=" width: 30px; height: 30px;">
    </a> -->
    <app-category></app-category>
       

  </div>

</nav>
</header>
  <div class="content">
        <section class="object-fit-sm-contain ">
      <router-outlet></router-outlet>
    </section>
  </div>

  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'abc';
}
