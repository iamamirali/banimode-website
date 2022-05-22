import { Component, OnInit } from '@angular/core';
import { DataProccessService } from 'src/app/services/data-proccess.service';
import { SugessDatum } from 'src/app/models/suggestions.model';
import { FlashDatum } from 'src/app/models/flash-sales.model';
import { ActivatedRoute } from '@angular/router';
import { IColorImage } from 'src/app/models/selectedColor.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  productList : FlashDatum[] | SugessDatum[] = []
  productItem : FlashDatum | SugessDatum | undefined
  mainImage: string = ''
  isInitImg: boolean = true
  otherColorData: IColorImage | undefined
  
  constructor(private dataFetch : DataProccessService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.dataFetch.getFlashSales().subscribe((data) => {
      this.productList = data.data.data
      if(!this.productItem) {
        this.productItem = this.productList.find((item) => item.id_product === +this.route.snapshot.params['id'])
        this.mainImage = this.productItem ? this.productItem.images.zoom[0] : ''
      }
    })
    this.dataFetch.getSuggestions().subscribe((data) => {
      this.productList = data.data.data
      if(!this.productItem) {
        this.productItem = this.productList.find((item) => item.id_product === +this.route.snapshot.params['id'])
        this.mainImage = this.productItem ? this.productItem.images.zoom[0] : ''
      }
    })
  }

  onExtraImgClick(image : string) {
    this.mainImage = image
  }

  onOtherColorClick(color: IColorImage) {
    this.otherColorData = color
    this.mainImage = color.image[0].image_size.thickbox_default
    if(color) this.isInitImg = false
  }
}
