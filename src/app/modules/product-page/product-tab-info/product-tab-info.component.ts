import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tab-info',
  templateUrl: './product-tab-info.component.html',
  styleUrls: ['./product-tab-info.component.scss']
})
export class ProductTabInfoComponent implements OnInit {

  isCommentClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onCommentClick() {
    this.isCommentClicked = true
  }

}
