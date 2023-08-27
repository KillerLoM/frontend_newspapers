import { Injectable } from '@angular/core';
import { Newspaperslastest } from './newspaperslastest';
import { NewspaperContent } from './newspaper-content';
import { Category } from './category';
@Injectable({
  providedIn: 'root'
})
export class NewspapersService {
  url = 'http://localhost:8888';
  urlContent = 'http://localhost:8888';
  urlBar = 'http://localhost:8888/get/menubar';
  // id = 1;
  constructor() {
    const id = 1;
  }
  async getAllNewspapersLastest(id: Number, currentPage: Number): Promise<Newspaperslastest[]> {
    // const temp = await fetch(`${this.url}/?id=${id}&page=${currentPage}&size=1`);
    // const responseTemp = await temp.json();
    // if (id == undefined) {id = 1};
    const size = 10;
    const data = await fetch(`${this.url}/?id=${id}&page=${currentPage}&size=${size}`);
    const response = await data.json();
    console.log(response);
    console.log(response.total - 1);
    return response.newspapers ?? [];
  }

  async getContentNewspaper(code: string): Promise<NewspaperContent | undefined> {
    const data = await fetch(`${this.urlContent}/newspaper/${code}`);

    return await data.json() ?? {};
  }
  async getCategoryNewspaper(): Promise<Category[] | undefined> {
    const data = await fetch(`${this.urlBar}`);
    const response =  await data.json();
    console.log(response[0].category);
    return response ??[];
  }

}
