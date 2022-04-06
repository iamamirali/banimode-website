import { Component, OnInit } from '@angular/core';
import { IComment } from 'src/app/models/comments-model';
import { DataProccessService } from 'src/app/services/data-proccess.service';

@Component({
  selector: 'app-product-comments-tab',
  templateUrl: './product-comments-tab.component.html',
  styleUrls: ['./product-comments-tab.component.scss']
})
export class ProductCommentsTabComponent implements OnInit {

  commentsList: IComment[] = []

  constructor(private dataProcces : DataProccessService) { }

  ngOnInit(): void {
    this.dataProcces.getComments().subscribe((data) => {
      console.log(data);
      this.commentsList = data.data;
    })
  }

  dateLocalizer(date : Date) : String {
    return new Date(date).toLocaleDateString('fa-IR')
  }
}
