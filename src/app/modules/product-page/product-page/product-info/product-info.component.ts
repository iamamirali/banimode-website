import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlashDatum } from 'src/app/models/flash-sales.model';
import { IColorImage } from 'src/app/models/selectedColor.model';
import { SugessDatum } from 'src/app/models/suggestions.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  selectedColor: string = ''

  @Input() productItem: FlashDatum | SugessDatum | undefined
  @Output() colorData = new EventEmitter<IColorImage>()

  constructor() { }
  
  ngOnInit(): void {
  }

  onColorClick(color: IColorImage) {
    this.colorData.emit(color)
    this.selectedColor = color.name
  }
}
