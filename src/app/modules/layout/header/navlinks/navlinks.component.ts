import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navlinks',
  templateUrl: './navlinks.component.html',
  styleUrls: ['./navlinks.component.scss']
})
export class NavlinksComponent implements OnInit {

  links: string[] = [
    'جدیدترین ها',
    'زنانه',
    'مردانه',
    'نوجوان',
    'بچگانه',
    'سایز بزرگ',
    'ورزشی',
    'زیبایی و سلامت',
    'لوازم خانه',
    'بازی و سرگرمی',
    'لوازم تحریر',
    'برند ها',
    'فروش ویژه',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
