import { Component, OnInit } from '@angular/core';
import { DataProccessService } from 'src/app/services/data-proccess.service';

@Component({
  selector: 'app-product-comments-tab',
  templateUrl: './product-comments-tab.component.html',
  styleUrls: ['./product-comments-tab.component.scss']
})
export class ProductCommentsTabComponent implements OnInit {

  constructor(private dataProcces : DataProccessService) { }

  ngOnInit(): void {
    this.dataProcces.getComments().subscribe((data) => {
      console.log(data);
    })
  }
}
