import { Component, OnInit } from '@angular/core';

interface SizeInfo {
  size: string;
  height: number;
  chest: number;
  shoulder: number;
  sleeve: number
}

const ELEMENT_DATA: SizeInfo[] = [
  {size: 'S', height: 74, chest: 105, shoulder: 45, sleeve: 65.5},
  {size: 'M', height: 76, chest: 110, shoulder: 47, sleeve: 66.5},
  {size: 'L', height: 78, chest: 115, shoulder: 49, sleeve: 67.5},
  {size: 'XL', height: 80, chest: 120, shoulder: 51, sleeve: 68.5},
  {size: 'XXL', height: 82, chest: 125, shoulder: 53, sleeve: 69.5},
  {size: 'XXXL', height: 84, chest: 130, shoulder: 55, sleeve: 70.5},
];

@Component({
  selector: 'app-size-info',
  templateUrl: './size-info.component.html',
  styleUrls: ['./size-info.component.scss']
})


export class SizeInfoComponent implements OnInit {

  displayedColumns: string[] = ['size', 'height', 'chest', 'shoulder', 'sleeve'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }
}
