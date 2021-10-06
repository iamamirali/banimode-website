import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  titles : string[] = [
    'purchase',
    'services',
    'info',
  ]
  purchase : string[] = [
    'خرید لباس',
    'لباس مردانه',
    'لباس زنانه',
    'لباس بچگانه',
    'خرید لوازم آرایشی',
  ]
  services : string[] = [
    'پرسش های متداول',
    'شرایط بازگشت',
    'راهنمای خرید',
    'فروش B2B',
    'سنجش رضایتمندی',
  ]
  info : string[] = [
    'درباره ما',
    'قوانین و مقررات',
    'تماس با ما',
    'فرصت های شغلی',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
