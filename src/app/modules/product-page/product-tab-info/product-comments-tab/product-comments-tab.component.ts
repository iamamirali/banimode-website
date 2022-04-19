import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IComment } from 'src/app/models/comments-model';
import { DataProccessService } from 'src/app/services/data-proccess.service';

@Component({
  selector: 'app-product-comments-tab',
  templateUrl: './product-comments-tab.component.html',
  styleUrls: ['./product-comments-tab.component.scss']
})
export class ProductCommentsTabComponent implements OnInit {

  commentsList: IComment[] = []
  reactionStatus: number = 0
  productId: number = this.route.snapshot.params['id']

  commentForm = new FormGroup({
    commentTitle: new FormControl(''),
    commentBody: new FormControl('')
  })

  constructor(private dataProcces : DataProccessService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.dataProcces.getComments(this.productId).subscribe((data) => {
      console.log(data);
      this.commentsList = data.data;
    })
  }

  dateLocalizer(date : Date) : String {
    return new Date(date).toLocaleDateString('fa-IR')
  }

  onSuggestionClick(reaction: number) {
    this.reactionStatus = reaction;
  }

  onSubmitForm() {
    let formData: any = new FormData();
    formData.append('id_product',this.productId)
    formData.append("title",this.commentForm.get('commentTitle')?.value)
    formData.append("content",this.commentForm.get('commentBody')?.value)
    formData.append("rate",this.reactionStatus)
    formData.append("grade",0)
  }
}
