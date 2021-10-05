import { Component, OnInit } from '@angular/core';
import { DataProccessService } from 'src/app/services/data-proccess.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataFetch : DataProccessService) { }

  ngOnInit(): void {
    this.dataFetch.getData().subscribe((data) => {
      console.log(data);
      
    })
  }

}
