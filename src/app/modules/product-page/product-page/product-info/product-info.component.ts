import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlashDatum } from 'src/app/models/flash-sales.model';
import { IColorImage } from 'src/app/models/selectedColor.model';
import { SugessDatum } from 'src/app/models/suggestions.model';
import { MatDialog } from '@angular/material/dialog';
import { ProductPageComponent } from '../product-page.component';
import { SizeInfoComponent } from '../size-info/size-info.component';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  colorSlideConfig = {
    "slidesToShow": 6,
    "slidesToScroll": 6,
    "arrows": true,
    "prevArrow": '<div style=\'position: absolute; top: -38px; left: 22%; z-index: 10; cursor: pointer; font-size: 1.6rem;\' class=\'next-slide\'><i class="fa fa-angle-right" style=\'color: gray;\'></i></div>',
    "nextArrow": '<div style=\'position: absolute; top: -38px; left: 0px; z-index: 10; cursor: pointer; font-size: 1.6rem\' class=\'next-slide\'><i class="fa fa-angle-left" style=\'color: gray;\'></i></div>',
    "infinite": false,
    "rtl": true,
    'dots': true,
  }

  selectedColor: string = ''
  selectedSize: string = ''

  @Input() productItem: FlashDatum | SugessDatum | undefined
  @Output() colorData = new EventEmitter<IColorImage>()

  constructor(private dialog: MatDialog) { }
  
  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(SizeInfoComponent)
  }

  onColorClick(color: IColorImage) {
    this.colorData.emit(color)
    this.selectedColor = color.name
  }
}
