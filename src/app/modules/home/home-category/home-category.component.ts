import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss']
})
export class HomeCategoryComponent implements OnInit {
  categoryImages : string[] = [
    'https://www.banimode.com/img/cms/000719/1633951614.jpg',
    'https://www.banimode.com/img/cms/000711/1633257596.jpg',
    'https://www.banimode.com/img/cms/000711/1633257583.jpg',
    'https://www.banimode.com/img/cms/000711/1633257630.jpg',
    'https://www.banimode.com/img/cms/000711/1633257617.jpg',
    'https://www.banimode.com/img/cms/000711/1633257647.jpg',
]

  constructor() { }

  ngOnInit(): void {
  }

}
