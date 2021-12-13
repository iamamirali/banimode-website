import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter-email-result',
  templateUrl: './newsletter-email-result.component.html',
  styleUrls: ['./newsletter-email-result.component.scss']
})
export class NewsletterEmailResultComponent implements OnInit {

  resultStatus: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
